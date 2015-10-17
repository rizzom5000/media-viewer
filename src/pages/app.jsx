import React from 'react';
import BaseComponent from '../components/base.jsx';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx';

class App extends BaseComponent {
    render() {
        return (
            <div>
                <Header/>
                <div className="main">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
}

export default App;
