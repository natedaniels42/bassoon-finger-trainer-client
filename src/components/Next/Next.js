import React from 'react';
import { Link } from 'react-router-dom';
import Note from '../Note/Note';
import Fingering from '../Fingering/Fingering';

class Next extends React.Component {
    render() {
        return (
            <div id="next">
                <h2>Question: <span>{this.props.index + 1}</span></h2>
                <h2>Score: <span>{this.props.score}</span></h2>
                <h3>{this.props.message}</h3>
                <Note note={this.props.notes[this.props.index]} randomIndex={this.props.randomIndex} />
                <Fingering fingering={this.props.fingerings[this.props.index]} color={this.props.message === 'correct' ? '#47EB41' : '#F51100'} />
                {this.props.index < 9 && (
                    <Link to='/game'>
                        <button id="next-button" onClick={this.props.handleNext}>Next</button>
                    </Link>
                )}
                {this.props.index === 9 && (
                <Link to="/levels">
                    <button id="play-again" onClick={this.props.handlePlayAgain}>Play Again?</button>
                </Link>
                )}
            </div>
        )
    }
}
export default Next;