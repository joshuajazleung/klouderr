const mongoose = require('mongoose');

const dbConfig = require('../config/database.config');
const mongoDB = dbConfig.dbConnection;
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
