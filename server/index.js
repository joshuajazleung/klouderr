require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')
const debug = require('debug')('app:index');
const compression = require('compression');
const morgan = require('morgan');
const boom = require('boom');
const helmet = require('helmet');

const { port, env } = require('./config/app.config');
const morganConfig = require('./config/morgan.config');
const logger = require('./services/logger.service');

require('./jobs/index');
require('./database/connect');

// secure the app by setting various HTTP headers
app.use(helmet());
// gzip
app.use(compression());
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())
app.use(morgan(morganConfig.format, {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan(morganConfig.format, {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));


const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.use(function (err, req, res, next) {
    logger.error(err)
    
    return res.status(err.output.statusCode || 500).json(err.output.payload || err);
})

if (env === 'production') {
    app.use(express.static(path.join(__dirname, 'public'), { maxAge: '30 days' }));

    app.use("*", function (req, res) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
