'use strict';

let controller = require('../controller'),
    db = require('../db');

describe('index', () => {
    it('should return the sets', (done) => {
        db.initDb().then(() => {
            controller.index({}, {
                send: (data) => {
                    expect(data.length).toEqual(3);
                    expect(data[0].id).not.toBe(null);
                    done();
                }
            });
        });
    });
});

describe('set', () => {
    it('should return a set', (done) => {
        db.initDb().then(() => {
            controller.set({ params: { id: 'photo' }}, {
                send: (data) => {
                    expect(data.id).not.toBe(null);
                    expect(data.photos.length).not.toBe(null);
                    done();
                }
            });
        });
    });
    it('should return a 404 when the id does not exist', (done) => {
        db.initDb().then(() => {
            controller.set({ params: { id: 'dne' }}, {
                sendStatus: (data) => {
                    expect(data).toEqual(404);
                    done();
                }
            });
        });
    });
});

// placeholder
describe('image', () => {
    it('should return an image', (done) => {
        db.initDb().then(() => {
            controller.image({ params: { id: 1, image: 2 }}, {
                send: (data) => {
                    expect(data.id).toEqual(1);
                    expect(data.image).toEqual(2);
                    done();
                }
            });
        });
    });
});

describe('not found', () => {
    it('should return 404', (done) => {
        controller.notFound({}, {
            sendStatus: (data) => {
                expect(data).toEqual(404);
                done();
            }
        });
    });
});
