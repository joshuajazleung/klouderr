const mongoose = require('mongoose');
const File = require('../models/files');
const multer = require('multer');
const multerS3 = require('multer-s3');
const fs = require('fs');
const path = require('path');
const btoa = require('btoa');
const mime = require('mime');
const debug = require('debug')('file.service');
const {
    removeObjects,
    getPresignedUrl,
    s3
} = require('./aws.service');

const fileConfig = require('../config/file.config');
const dbConfig = require('../config/database.config');
const mongoDB = dbConfig.dbConnection;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;

module.exports = {
    async getFile(req, res, next) {
        try {
            const file = await File.findOne({
                encodedName: req.params.id
            });

            if (!file) {
                return res.status(404).send({
                    status: 'error',
                    message: 'file not found.'
                });
            }

            const url = await getPresignedUrl(fileConfig.AWSBucket, file.key);
            fileObj = file.toObject();
            fileObj.url = url;
            debug(fileObj);
            // res.send(fileObj);
            res.send((({
                name,
                visitCount,
                downloadCount,
                url,
                removeCode
            }) => ({
                name,
                visitCount,
                downloadCount,
                url,
                removeCode
            }))(fileObj))

            file.visitCount += 1;
            await file.save();
        } catch (e) {
            debug(e);
            return next(e, 'unable to fetch file.');
        }
    },

    async uploadFile(req, res, next) {
        debug(req.files[0]);

        const file = req.files[0];

        let fileModel = new File({
            name: file.originalname,
            size: file.size,
            extension: mime.getExtension(file.mimetype),
            bucket: file.bucket,
            key: file.key,
            location: file.location
        });

        try {
            await fileModel.save();

            fileModel.encodedName = btoa(fileModel._id)
            fileModel.removeCode = btoa(fileModel._id + '-remove');

            await fileModel.save();

            res.status(201).json({
                status: 'success',
                name: fileModel.name,
                encodedName: fileModel.encodedName,
                removeCode: fileModel.removeCode
            });
        } catch (e) {
            debug(e);
            return next(e);
        }
    },

    async downloadFile(req, res, next) {

        try {
            const file = await File.findOne({
                encodedName: req.params.id
            });

            if (!file) {
                return res.status(404).send({
                    status: 'error',
                    message: 'file not found.'
                });
            }

            file.downloadCount += 1;
            file.lastDownloadedAt = Date.now();

            await file.save();

            return res.end();
        } catch (e) {
            debug(e);
            return next(e);
        }
    },

    async deleteFile(req, res, next) {
        try {
            const file = await File.findOne({
                encodedName: req.params.id,
                removeCode: req.params.code
            });

            debug(file);

            if (!file) {
                debug('no file');
                return res.status(404).end();
            }

            const resultFromAWS = await removeObjects(fileConfig.AWSBucket, [file.key]);
            const resultFromDB = await file.remove();
            debug(resultFromAWS);
            debug(resultFromDB);
            return res.end();
        } catch (e) {
            debug(e);
            return next(e, 'unable to delete file.')
        }
    },

    getFileOptions() {
        return {
            storage: multerS3({
                s3: s3,
                bucket: fileConfig.AWSBucket,
                acl: 'public-read',
                key: function (req, file, cb) {
                    debug(file);
                    cb(null, `${Date.now().toString()}-${file.originalname}`)
                }
            }),
            limits: {
                fileSize: 1024 * 1024 * 50,
            }
        }
    }
}
