import React from 'react';
import { Link } from   'react-router-dom';

class Levels extends React.Component {
    state = {
        low: null,
        high: null
    }

    handleClick = (event) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.style.border = '1px solid black');
        const numbers = event.target.id.split('-').map(Number);
        this.setState({low: numbers[0], high: numbers[1]});
        event.target.style.border = '2px solid blue';
    }

    render() {
        return (
            <div>
                <h3>Pick a Difficulty Level:</h3>
                    <button id="7-19" onClick={this.handleClick}>Beginner</button>
                    <button id="0-31" onClick={this.handleClick}>Intermediate</button>
                    <button id="0-42" onClick={this.handleClick}>Advanced</button><hr/>
                <h3>Or Pick a Range:</h3>
                    <button id="0-10" onClick={this.handleClick}>Low</button>
                    <button id="7-26" onClick={this.handleClick}>Mid</button>
                    <button id="26-38" onClick={this.handleClick}>High</button>
                    <button id="31-42" onClick={this.handleClick}>Extreme</button><hr/>
                <Link to={{pathname: "/game", state: {
                    low: this.state.low, high: this.state.high
                    } 
                }}>
                    <button>Go To Game</button>
                </Link>
            </div>
        )
    }
}

export default Levels;