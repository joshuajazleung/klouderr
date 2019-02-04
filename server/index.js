require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path')
const debug = require('debug')('index');

require('./jobs/index');

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())


const port = 3000;

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.use(function (err, req, res, next) {
    debug(err)

    res.status(500).send('Something broke!')
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')))

    app.use("*", function (req, res) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
