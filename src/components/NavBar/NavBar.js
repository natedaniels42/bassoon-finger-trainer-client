import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <div className="nav-link-container">
                <NavLink className="nav-link" to="/finger-chart">Fingering Chart</NavLink>
            </div>
            <div className="nav-link-container">
                <NavLink className="nav-link" to='/'>Game</NavLink>
            </div>
            <div className="nav-link-container">
                <NavLink className="nav-link" to='/'>Exit Game</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;