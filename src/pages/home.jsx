import React from 'react';
import BaseComponent from '../components/base.jsx';
import Sets from '../components/sets.jsx';

class Home extends BaseComponent {
    render() {
        return (
            <div>
                <h2>Take a look at some of our image sets.</h2>
                <span className="lead">Click on any image to get started.</span>
                <Sets />
            </div>
        );
    }
}

export default Home;
