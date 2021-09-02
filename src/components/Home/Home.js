import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Home.css';

function Home() {
    return (
        <div id="home">
            <h1>Key Masters</h1>
            <h2>For Bassoon</h2>
            <Link to="/levels">
                <button id="play-game">Play Game</button>
            </Link>
        </div>
    )
}

export default Home;