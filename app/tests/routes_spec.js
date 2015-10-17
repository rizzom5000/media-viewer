'use strict';

let routes = require('../routes');

let mockRoutes = [];
let mockApp = {
    get: (route, controller) => {
        mockRoutes.push({
            route: route,
            controller: controller
        });
    }
};

describe('router init', () => {
    it('should set up routes', (done) => {
        routes(mockApp);
        expect(mockRoutes.length).toEqual(4);
        expect(mockRoutes[0].route).toEqual('/api');
        done();
    });
});
