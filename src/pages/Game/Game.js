import React from 'react';
import { Link } from 'react-router-dom';
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
        message: '',
        active: true
    }

    componentDidMount() {
        let low = this.props.location.state.low;
        let high = this.props.location.state.high;
        BassoonModel.findAnswers(low, high)
            .then((result) => {
                this.setState({notes: result.foundNotes, fingerings: result.foundFingerings})
            })
        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('play-again').style.visibility = 'hidden';
    }

    eraseKeys = () => {
        for (let i = 0; i <= 27; i++) {
            document.getElementById(`key${i}`).style.fill = 'white';
        }
    }

    handleClick = (event) => {
        if (this.state.active) {
            let newGuess;
            let key27;
            let key1;
            let { guess } = this.state;
            let key = event.target;
            if (key.id === 'key1') {
                key27 = 'key27';
                if (!guess.includes(key.id)) {
                    document.getElementById('key27').style.fill = 'purple';
                } else {
                    document.getElementById('key27').style.fill = 'white';
                }
            } 
            if (key.id === 'key27') {
                key1 = 'key1';
                if (document.getElementById(key1).style.fill === 'purple') {
                    document.getElementById(key1).style.fill = 'white';
                }
            }
            if (!guess.includes(key.id)) {
                key.style.fill = 'purple';
                newGuess = guess.concat(key.id);
                newGuess.sort(); 
            } else {
                key.style.fill = 'white';
                newGuess = guess.filter(guessKey => guessKey !== key.id);
            }
            newGuess = newGuess.filter(guessKey => guessKey !== key27 && guessKey !== key1);
            this.setState({guess: newGuess});
        }
    }

    handleSubmit = () => {
        let current = this.state.fingerings[this.state.index];
        let correct = true;
        let result = []
    
        current.keys.forEach(fingering => {
            correct = true;
            fingering.forEach((key, i) => {
                if (key !== this.state.guess[i]) {
                    correct = false;
                    return;
                }
            })
            result.push(correct);
        })
    
        correct = result.includes(true); 
    
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
    
        this.setState({active: false});
    }

    handleNext = () => {
        let newIndex = this.state.index + 1;
        this.setState({index: newIndex, message: '', guess: [], active: true});
        this.eraseKeys();
        document.getElementById('next').style.visibility = 'hidden';
        document.getElementById('submit').style.visibility = 'visible';
    }
    
    render() {
        const { notes, index, fingerings, score, message, active } = this.state;

        return (
            <div>
                <h2>Question: <span>{index + 1}</span></h2>
                <h2>Score: <span>{score}</span></h2>
                <h3>{message}</h3>
                {this.state.notes && (
                    <Note note={notes[notes.findIndex(note => note.name === fingerings[index].name)]} />
                )}
                <Fingering list={false} active={true} handleClick={this.handleClick} />
                <button id="submit" onClick={this.handleSubmit}>Submit</button>
                <button id="next" onClick={this.handleNext}>Next</button>
                <Link to="/levels">
                    <button id="play-again">Play Again?</button>
                </Link>
            </div>
        )
    }
}

export default Game;