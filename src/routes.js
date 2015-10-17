import React from 'react'; // eslint-disable-line no-unused-vars
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Set from './pages/set.jsx';
import Image from './pages/image.jsx';
import NotFound from './pages/notfound.jsx';

let routes = (
    <Route handler={App}>
        <Route name="home" path="/" handler={Home} />
        <Route path="/:id" handler={Set} />
        <Route path="/:id/:image" handler={Image} />
        <DefaultRoute handler={Home} />
        <NotFoundRoute handler={ NotFound } />
    </Route>
);

export default routes;
