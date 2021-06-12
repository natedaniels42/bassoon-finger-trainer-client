import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Welcome to Bassoon Finger Trainer</h1>
            <Link to="/levels">
                <button>Play Game</button>
            </Link>
        </div>
    )
}

export default Home;