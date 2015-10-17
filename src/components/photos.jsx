import React from 'react';
import BaseComponent from './base.jsx';
import request from 'browser-request';
import ComponentGallery from 'react-component-gallery';
import { Container } from 'react-responsive-grid';
import ImageLoader from 'react-imageloader';

class Photos extends BaseComponent {
    constructor() {
        super();
        this.state = { photos: [] };
    }

    componentWillMount() {
        let params = this.params = this.context.router.getCurrentParams();
        request.get('/api/' + params.id, (err, res, body) => {
            if (err) { return; }
            if (res.statusCode === 404) { return; }
            let data = JSON.parse(body);
            this.setState({
                summary: data.summary,
                photos: data.photos
            });
        });
    }

    handleClick(url) {
        this.context.router.transitionTo('/' + this.params.id + '/' + url);
    }

    preloader() {
        return <img src='/images/default.gif'/>;
    }

    render() {
        return (
            <Container style={"maxWidth: '1200px'"}>
                <h2>{this.state.summary}</h2>
                <ComponentGallery className="photos" margin={10} widthHeightRation={3 / 5} targetWidth={600}>
                    {this.state.photos.map((photo, idx) => {
                        return <div key={idx} onClick={this.handleClick.bind(this, encodeURIComponent(photo.url))}>
                            <ImageLoader
                                src={photo.url}
                                preloader={this.preloader.bind(this)}
                            />
                            <div>{photo.caption}</div>
                        </div>;
                    })}
                </ComponentGallery>
            </Container>
        );
    }
}

Photos.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Photos;
