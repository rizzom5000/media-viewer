import React from 'react';
import BaseComponent from './base.jsx';
import request from 'browser-request';
import { Row, Col } from 'elemental';
import ImageLoader from 'react-imageloader';

class Sets extends BaseComponent {
    constructor() {
        super();
        this.state = { sets: [] };
    }

    componentWillMount() {
        request.get('/api', (err, res, body) => {
            if (err) { return; }
            if (res.statusCode === 404) { return; }
            this.setState({
                sets: JSON.parse(body)
            });
        });
    }

    handleClick(id) {
        this.context.router.transitionTo('/' + id);
    }

    preloader() {
        return <img src='/images/default.gif'/>;
    }

    render() {
        return (
            <div className="sets">
                <Row>
                    {this.state.sets.map((set) => {
                        return <Col sm="1/3">
                                    <div className="set">
                                        <h3>{set.cover.headline}</h3>
                                        <figure key={set.id} onClick={this.handleClick.bind(this, set.id)}>
                                            <ImageLoader
                                                src={set.cover.src}
                                                preloader={this.preloader.bind(this)}
                                            />
                                            <caption>{set.cover.credit}</caption>
                                        </figure>
                                        <div>{set.cover.caption}</div>
                                    </div>
                                </Col>;

                    })}
                </Row>
            </div>
        );
    }
}

Sets.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Sets;
