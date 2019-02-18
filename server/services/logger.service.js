const winston = require("winston");
const { level } = require('../config/logging.config')

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: level,
            timestamp: function () {
                return (new Date()).toISOString();
            }
        })
    ]
});

module.exports = logger
