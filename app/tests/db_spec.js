'use strict';

let db = require('../db');

describe('getDb', () => {
    it('should exist', (done) => {
        var database = db.getDb();
        expect(database).not.toBe(null);
        done();
    });
});

describe('initDb', () => {
    it('should resolve', (done) => {
        db.initDb().then(() => {
            done();
        });
    });
});
