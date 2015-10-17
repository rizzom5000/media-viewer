'use strict';

let logger = require('./logger');

let express = require('express'),
    http = require('http'),
    path = require('path'),
    config = require('./config'),
    favicon = require('serve-favicon');

// create the server
let app = module.exports = express();

// configuration
app.set('port', config.env.port);
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// instantiate data store
require('./db').initDb().then(() => {
    // start the server
    http.createServer(app).listen(app.get('port'), () => {
        logger.info('Express server listening on port %d', app.get('port'));
    });
    // instantiate routing
    require('./routes')(app);
});
