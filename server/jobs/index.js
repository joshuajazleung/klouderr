const schedule = require('node-schedule');
const debug = require('debug')('jobs.index');
const mongoose = require('mongoose');

const {
    removeObjects
} = require('../services/aws.service');
const File = require('../models/files');
const fileConfig = require('../config/file.config');

// run every day at midnight
// remove files that hadn't been downloaded for 7 days
const removeUntouchedFiles = schedule.scheduleJob('* * * * *', function () {
    debug('************************************');
    debug('Running removeUntouchedFiles');
    debug('************************************');

    var cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 7);

    File.find({
        lastDownloadedAt: {
            $lt: cutoff
        }
    }, function (err, docs) { 
        if (err) {
            debug(err);
            return;
        }

        if (docs.length === 0) {
            debug('no docs');
            return;
        }

        const keys = docs.map(doc => doc.key);
        const ids = docs.map(doc => doc._id.toString());

        debug(keys)
        debug(ids)

        removeObjects(fileConfig.AWSBucket, keys, async (err, data) => {
            if (err) {
                debug(err);
                return;
            }

            const result = await File.deleteMany({_id: {$in: ids.map(mongoose.Types.ObjectId)}});
            debug(result);
        })
    });
});
