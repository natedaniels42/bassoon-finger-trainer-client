import React from 'react';
import Fingering from '../../components/Fingering/Fingering';
import BassoonModel from '../../models/Bassoon';
import Note from '../../components/Note/Note';

class Game extends React.Component {
    state = {
        notes: [],
        fingerings: [],
        guess: [],
        index: 0,
        score: 0,
        message: ''
    }

    componentDidMount() {
        BassoonModel.findAnswers(0, 35)
            .then((result) => {
                this.setState({notes: result.foundNotes, fingerings: result.foundFingerings})
            })
        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('play-again').style.visibility = 'hidden';
    }

    eraseKeys = () => {
        for (let i = 0; i <= 26; i++) {
            document.getElementById(`key${i}`).style.fill = 'white';
        }
    }

    handleClick = (event) => {
        let newGuess;
        let { guess } = this.state;
        let key = event.target;
        if (!guess.includes(key.id)) {
            key.style.fill = 'purple';
            newGuess = guess.concat(key.id);
            newGuess.sort(); 
        } else {
            key.style.fill = 'white';
            newGuess = guess.filter(guessKey => guessKey !== key);
        }
        this.setState({guess: newGuess});
    }

    handleSubmit = () => {
        let current = this.state.fingerings[this.state.index];
        let correct = true;
        for (let i = 0; i < current.keys[0].length; i++) {
            if (current.keys[0][i] !== this.state.guess[i]) {
                correct = false;
                break;
            }
        }
        if (correct) {
            let newScore = this.state.score + 1;
            this.setState({score: newScore, message: 'correct'});
        } else {
            this.setState({message: 'incorrect'});
        }
        document.getElementById('submit').style.visibility = 'hidden';
        if (this.state.index < 9) {
            document.getElementById('next').style.visibility = 'visible';
        } else {
            document.getElementById('play-again').style.visibility = 'visible';
        }
    }

    handleNext = () => {
        let newIndex = this.state.index + 1;
        this.setState({index: newIndex, message: '', guess: []});
        this.eraseKeys();
        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('submit').style.visibility = 'visible';
    }

    handlePlayAgain = () => {
        this.setState({score: 0, index: 0, guess: [], message: ''});
        this.eraseKeys();
        document.getElementById('play-again').style.visibility = 'hidden';
        document.getElementById('submit').style.visibility = 'visible';
    }
    
    render() {
        const { notes, index, fingerings, score, message } = this.state;

        return (
            <div>
                <h2>Question: <span>{index + 1}</span></h2>
                <h2>Score: <span>{score}</span></h2>
                <h3>{message}</h3>
                <Note note={notes[notes.findIndex(note => note.name === fingerings[index].name)]} />
                <Fingering active={true} handleClick={this.handleClick} />
                <button id="submit" onClick={this.handleSubmit}>Submit</button>
                <button id="next" onClick={this.handleNext}>Next</button>
                <button id="play-again" onClick={this.handlePlayAgain}>Play Again?</button>
            </div>
        )
    }
}

export default Game;