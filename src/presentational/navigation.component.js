import React from 'react';
import { Link } from 'react-router';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';

const Navigation = props => (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Państwa.js</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="nav navbar-nav">
              <li><Link to="/countries" class="nav-link">Countries</Link></li>
              <li><Link to="/continents" class="nav-link">Continents</Link></li>
              <li><Link to="/contact" class="nav-link">Contact</Link></li>
            </ul>
          </div>  

        </nav>

        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);

export default Navigation;