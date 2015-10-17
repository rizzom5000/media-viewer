'use strict';

let controller = require('./controller');

module.exports = (app) => {
    // routes
    app.get('/api', controller.index);
    app.get('/api/:id', controller.set);
    app.get('/api/:id/:imageId', controller.image);
    app.get('/api/*', controller.notFound);
};
