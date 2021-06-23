import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Fingering from '../../components/Fingering/Fingering';
import BassoonModel from '../../models/Bassoon';
import Note from '../../components/Note/Note';
import '../../App.css';

class Game extends React.Component {
    

    eraseKeys = () => {
        for (let i = 0; i <= 27; i++) {
            document.getElementById(`key${i}`).style.fill = 'white';
        }
    }

    render() {
        return (
            <div className="game-container">
                <h2>Question: <span>{this.props.index + 1}</span></h2>
                <h2>Score: <span>{this.props.score}</span></h2>
                {this.props.notes && (
                    <Note note={this.props.notes[this.props.index]} />
                )}
                <Fingering list={false} active={true} handleClick={this.props.handleClick} />
                <Link to="/next">
                    <button id="submit" onClick={this.props.handleSubmit}>Submit</button>
                </Link>
            </div>
        )
    }
}

export default withRouter(Game);