import React from 'react';
import { Link } from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

const Navigation = props => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Państwa.js</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/countries" class="nav-link">Countries</Link></li>
                        <li><Link to="/continents" class="nav-link">Continents</Link></li>
                        <li><Link to="/contact" class="nav-link">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;