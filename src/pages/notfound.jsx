import React from 'react';
import BaseComponent from '../components/base.jsx';

class NotFound extends BaseComponent {
    render() {
        return (
          <div>
            <h1>404!</h1>
            Route not found :/
          </div>
        );
    }
}

export default NotFound;
