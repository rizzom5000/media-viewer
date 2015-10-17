import React from 'react';
import BaseComponent from '../components/base.jsx';
import request from 'browser-request';
import Photos from '../components/photos.jsx';

class Set extends BaseComponent {
    render() {
        return (
            <div>
                <Photos/>
            </div>
        );
    }
}

export default Set;
