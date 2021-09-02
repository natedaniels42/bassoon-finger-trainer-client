import React from 'react';
import { withRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Routes from './config/routes';
import NoteModel from './models/Notes';
import FingeringModel from './models/Fingerings';

class App extends React.Component {
  state = {
    notes: [],
    fingerings: [],
    guess: [],
    index: 0,
    score: 0,
    message: '',
    active: true,
    low: null,
    high: null,
    randomIndex: 0
  }
  
  componentDidMount() {
    NoteModel.getAllNotes()
      .then((result) => {
        sessionStorage.setItem('notes', JSON.stringify(result))
      })
    FingeringModel.getAllFingerings() 
      .then((result) => {
        sessionStorage.setItem('fingerings', JSON.stringify(result))
      })
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
                document.getElementById('key27').style.fill = '#BF72F5';
            } else {
                document.getElementById('key27').style.fill = 'white';
            }
        } 
        if (key.id === 'key27') {
            key1 = 'key1';
            if (document.getElementById(key1).style.fill === '#BF72F5') {
                document.getElementById(key1).style.fill = 'white';
            }
        }
        if (!guess.includes(key.id)) {
            key.style.fill = '#BF72F5';
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
        if (fingering.length !== this.state.guess.length) {
          correct = false;
        }
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

    this.setState({active: false});
  }

  findNotes = () => {
    this.setState({notes: [], active: true, guess: []});
    let low = this.state.low;
    let high = this.state.high;
    const indexes = [];

    while (indexes.length < 10) {
      const random = low + Math.floor(Math.random() * (high - low));

      if (!indexes.includes(random)) {
        indexes.push(random);
      }
    }
    
    const retrievedNotes = sessionStorage.getItem('notes');
    const retrievedFingerings = sessionStorage.getItem('fingerings');
    const notes = JSON.parse(retrievedNotes);
    const fingerings = JSON.parse(retrievedFingerings);
    const foundNotes = indexes.map(num => notes[num]);
    const foundFingerings = foundNotes.map(note => fingerings.find(fingering => fingering.name === note.name));
    const randomIndex = Math.floor(Math.random() * foundNotes[0].images.length);
    this.setState({notes: foundNotes, fingerings: foundFingerings, randomIndex: randomIndex});
  }

  handleLevel = (event) => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.style.border = '1px solid black');
    const numbers = event.target.id.split('-').map(Number);
    this.setState({low: numbers[0], high: numbers[1]});
    event.target.style.backgroundColor = 'lightblue';
    event.target.style.color = 'black';
  }

  handleNext = () => {
    let newIndex = this.state.index + 1;
    const randomIndex = Math.floor(Math.random() * this.state.notes[newIndex].images.length)
    this.setState({index: newIndex, message: '', guess: [], active: true, randomIndex: randomIndex});
    document.getElementById('next').style.visibility = 'hidden';
  }

  eraseKeys = () => {
    for (let i = 0; i <= 27; i++) {
        document.getElementById(`key${i}`).style.fill = 'white';
    }
  }

  handlePlayAgain = () => {
    this.setState({
      notes: [],
      fingerings: [],
      guess: [],
      index: 0,
      score: 0,
      message: '',
      active: true,
      low: null,
      high: null
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />   
        <main>
          <Routes 
            randomIndex={this.state.randomIndex}
            score={this.state.score} 
            index={this.state.index} 
            message={this.state.message}
            notes={this.state.notes} 
            fingerings={this.state.fingerings}
            high={this.state.high}
            handleClick={this.handleClick} 
            handleSubmit={this.handleSubmit} 
            findNotes={this.findNotes} 
            handleLevel={this.handleLevel}
            handleNext={this.handleNext} 
            handlePlayAgain={this.handlePlayAgain}/>
        </main>  
      </div>
    );
  }
}

export default withRouter(App);
