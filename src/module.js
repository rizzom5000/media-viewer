import React from 'react';
import Router from 'react-router';
import routes from './routes';
import './module.less';

Router.run(routes, Handler => React.render(<Handler />, document.body));
