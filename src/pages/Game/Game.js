import React from 'react';
import Fingering from '../../components/Fingering/Fingering';
import BassoonModel from '../../models/Bassoon';

class Game extends React.Component {
    state = {
        notes: [],
        fingerings: [],
        guess: []
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
    
    render() {
        return (
            <div>
                <Fingering active={false} />
                <Fingering active={true} handleClick={this.handleClick} />
            </div>
        )
    }
}

export default Game;