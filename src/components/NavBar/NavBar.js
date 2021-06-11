import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <NavLink to="/finger-chart">Fingering Chart</NavLink>
            <NavLink to='/game'>Game</NavLink>
            <NavLink to='/'>Exit Game</NavLink>
        </nav>
    )
}

export default NavBar;