'use strict';

let path = require('path');

let config = require('./config'),
    logger = require('./logger');

let request = require('request'),
    Bluebird = require('bluebird');

let Engine = require('tingodb')();

// database singleton
let _db = null;
function getDb() {
    if (!_db) {
        _db = new Engine.Db(path.join(__dirname, 'db'), {});
    }
    return _db;
}
module.exports.getDb = getDb;

// initialize the database
module.exports.initDb = () => {
    // set up the database
    let db = getDb();
    let sets = db.collection('sets');
    let urls = config.accessURLs;
    // we're going to cache everything from our external apis
    return new Promise((resolve, reject) => {
        sets.count((err, count) => {
            if (err) { logger.error(err); }
            if (urls.length && count === 0) {
                logger.info('loading database');
                let requests = [];
                urls.forEach((url) => {
                    requests.push(
                        request(url, (erro, res, body) => {
                            if (erro) { return logger.error(erro); }
                            if (res.statusCode !== 200) {
                                return logger.error('Invalid Status Code Returned ', res.statusCode);
                            }

                            let func = new Function('cb', body); // eslint-disable-line no-new-func
                            func((data) => {
                                // TODO: validate the the data against a schema, use the schema to extract the data
                                logger.info('inserting set ', data.id);
                                sets.insert(data);
                            });
                        })
                    );
                    Bluebird.all(requests).then(() => {
                        resolve();
                    });
                });
            } else {
                if (count > 0) {
                    logger.info('opening database');
                    resolve();
                } else {
                    reject('no data');
                }
            }
        });
    });
};
