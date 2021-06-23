import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

function Home() {
    return (
        <div>
            <h1>Welcome to Bassoon Finger Trainer</h1>
            <p>This is a game to train you on your fingerings for the bassoon.  You can choose your level or a specific range you would like to practice. Click on the correct keys to add it to your guess and once you have chosen all the keys click the submit button.  You have 10 fingerings to guess.  Good luck!!!</p>
            <Link to="/levels">
                <button>Play Game</button>
            </Link>
        </div>
    )
}

export default Home;