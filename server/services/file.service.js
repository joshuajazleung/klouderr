const File = require('../models/files');
const multerS3 = require('multer-s3');
const btoa = require('btoa');
const mime = require('mime');
const debug = require('debug')('file.service');
const boom = require('boom');
const _ = require('lodash');
const moment = require('moment');
const path = require('path');
const {
    removeObjects,
    getCFPresignedUrl,
    s3
} = require('./aws.service');

const fileConfig = require('../config/file.config');

module.exports = {
    async getFile(req, res, next) {
        const file = await File.findOne({
            encodedName: req.params.id
        });

        if (!file) {
            throw boom.badRequest('wrong file id.')
        }

        const {
            AWSCloudFrontPublicKey,
            AWSCloudFrontPrivateKey,
            AWSCloudFrontBaseUrl
        } = fileConfig;

        const url = getCFPresignedUrl(
            AWSCloudFrontPublicKey, 
            AWSCloudFrontPrivateKey, 
            moment().add(15, 'm'),
            `${AWSCloudFrontBaseUrl}/${file.key}`
            );
        fileObj = file.toObject();
        fileObj.url = url;

        debug(fileObj);

        res.send(_.pick(fileObj, ['name', 'encodedName', 'visitCount', 'downloadCount', 'url', 'removeCode']));

        file.visitCount += 1;
        await file.save();
    },

    async uploadFile(req, res, next) {
        const file = req.files[0];

        let fileModel = new File({
            name: file.originalname,
            size: file.size,
            extension: mime.getExtension(file.mimetype),
            bucket: file.bucket,
            key: file.key,
            location: file.location
        });

        fileModel.encodedName = btoa(fileModel._id)
        fileModel.removeCode = btoa(fileModel._id + '-remove');

        await fileModel.save();

        res.status(201).json({
            status: 'success',
            name: fileModel.name,
            encodedName: fileModel.encodedName,
            removeCode: fileModel.removeCode
        });
    },

    async downloadFile(req, res, next) {
        const file = await File.findOne({
            encodedName: req.params.id
        });

        if (!file) {
            throw boom.badRequest('wrong file id.');
        }

        file.downloadCount += 1;
        file.lastDownloadedAt = Date.now();

        await file.save();

        return res.end();
    },

    async deleteFile(req, res, next) {
        const file = await File.findOne({
            encodedName: req.params.id,
            removeCode: req.params.code
        });

        if (!file) {
            throw boom.badRequest('wrong file id.');
        }

        const resultFromAWS = await removeObjects(fileConfig.AWSBucket, [file.key]);
        const resultFromDB = await file.remove();
        debug(resultFromAWS);
        debug(resultFromDB);

        return res.end();
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
                },
                contentType: multerS3.AUTO_CONTENT_TYPE,
            }),
            limits: {
                fileSize: 1024 * 1024 * 50,
            }
        }
    }
}
