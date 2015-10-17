import React from 'react';
import BaseComponent from './base.jsx';
import { Link } from 'react-router';

class Header extends BaseComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="clearfix">
                Media Viewer
                <nav className="clearfix">
                    <div className="nav-item">
                        <Link to="home">Home</Link>
                    </div>
                </nav>
            </header>
        );
    }
}

Header.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Header;
