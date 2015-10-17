import React from 'react';
import BaseComponent from './base.jsx';

class Photo extends BaseComponent {
    constructor() {
        super();
        this.state = { photos: [] };
    }

    componentWillMount() {
        this.params = this.context.router.getCurrentParams();
    }

    render() {
        return (
            <div className="photo">
                <img src={decodeURIComponent(this.params.image)}/>;
            </div>
        );
    }
}

Photo.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Photo;
