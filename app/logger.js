'use strict';

let winston = require('winston'),
    path = require('path');

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ json: false, timestamp: true }),
        new winston.transports.File({ filename: path.join(__dirname, 'debug.log'), json: true })
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({ json: false, timestamp: true }),
        new winston.transports.File({ filename: path.join(__dirname, 'exceptions.log'), json: true })
    ],
    exitOnError: false
});

module.exports = logger;
