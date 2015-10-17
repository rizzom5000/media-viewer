'use strict';

let logger = require('./logger');

let db = require('./db').getDb();

// controller logic
exports.index = (req, res) => {
    db.collection('sets').find({})
    .toArray((err, sets) => {
        if (err) { return logger.error(err); }
        res.send(sets);
    });
};

exports.set = (req, res) => {
    db.collection('sets').findOne({id: req.params.id}, (err, result) => {
        if (err) { logger.error(err); }
        if (result) {
            res.send(result);
        } else {
            res.sendStatus(404);
        }
    });
};

// placeholder
exports.image = (req, res) => {
    let set = req.params.id,
        image = req.params.image;
    res.send({ id: set, image: image });
};

exports.notFound = (req, res) => {
    res.sendStatus(404);
};
