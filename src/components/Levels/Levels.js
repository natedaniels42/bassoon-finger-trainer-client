import React from 'react';
import { Link } from   'react-router-dom';

class Levels extends React.Component {
/*
    handleLevel = (event) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => button.style.border = '1px solid black');
        const numbers = event.target.id.split('-').map(Number);
        this.setState({low: numbers[0], high: numbers[1]});
        event.target.style.border = '2px solid blue';
    }
*/
    render() {
        return (
            <div>
                <h3>Pick a Difficulty Level:</h3>
                    <button id="7-19" onClick={this.props.handleLevel}>Beginner</button>
                    <button id="0-31" onClick={this.props.handleLevel}>Intermediate</button>
                    <button id="0-43" onClick={this.props.handleLevel}>Advanced</button><hr/>
                <h3>Or Pick a Range:</h3>
                    <button id="0-10" onClick={this.props.handleLevel}>Low</button>
                    <button id="7-26" onClick={this.props.handleLevel}>Mid</button>
                    <button id="26-38" onClick={this.props.handleLevel}>High</button>
                    <button id="31-43" onClick={this.props.handleLevel}>Extreme</button><hr/>
                <Link to="/game">
                    <button onClick={this.props.findNotes}>Go To Game</button>
                </Link>
            </div>
        )
    }
}

export default Levels;