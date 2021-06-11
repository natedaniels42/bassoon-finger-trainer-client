import React from 'react';
import Fingering from '../../components/Fingering/Fingering';
import BassoonModel from '../../models/Bassoon';
import Note from '../../components/Note/Note';

class Game extends React.Component {
    state = {
        notes: [],
        fingerings: [],
        guess: [],
        index: 0
    }

    componentDidMount() {
        BassoonModel.findAnswers(5, 25)
            .then((result) => {
                this.setState({notes: result.foundNotes, fingerings: result.foundFingerings})
            })
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
        for (let i = 0; i < current.keys[0].length; i++) {
            console.log([current.keys[0][i], this.state.guess[i]]);
        }
    }
    
    render() {
        const { notes, index, fingerings } = this.state;

        return (
            <div>
                <Note note={notes[index]} />
                <Fingering active={true} handleClick={this.handleClick} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Game;