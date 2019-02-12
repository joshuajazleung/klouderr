const aws = require('aws-sdk');
const cfsign = require('aws-cloudfront-sign');
const fileConfig = require('../config/file.config');

aws.config.update({
    // Your SECRET ACCESS KEY from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.SECRET_ACCESS_KEY
    secretAccessKey: fileConfig.AWSSecretAccess,
    // Not working key, Your ACCESS KEY ID from AWS should go here,
    // Never share it!
    // Setup Env Variable, e.g: process.env.ACCESS_KEY_ID
    accessKeyId: fileConfig.AWSAccessKeyID,
    region: fileConfig.AWSRegion // region of your bucket
});

const s3 = new aws.S3();

module.exports = {
    s3,

    /**
     * Remove objects from AWS S3
     * @param {*} bucket bucket name
     * @param {*} keys object keys
     * @param {*} cb callback
     */
    removeObjects(bucket, keys, cb) {
        keys = keys.map(key => ({
            Key: key
        }));

        const params = {
            Bucket: bucket,
            Delete: { // required
                Objects: keys,
            },
        };

        return new Promise((resolve, reject) => {
            s3.deleteObjects(params, function (err, data) {
                if (err) {
                    return reject(err);
                }

                return resolve(data);
            });
        })
    },

    getS3PresignedUrl(bucket, key, cb) {
        const params = {
            Bucket: bucket,
            Key: key
        };

        return s3.getSignedUrl('getObject', params);
    },

    getCFPresignedUrl(publicKey, privateKey, expireTime, url) {
        const signingParams = {
            keypairId: publicKey,
            privateKeyString: privateKey,
            expireTime: expireTime
        }

        // Generating a signed URL
        const signedUrl = cfsign.getSignedUrl(
            url,
            signingParams
        );

        return signedUrl;
    }
}
