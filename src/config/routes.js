import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FingeringChart from '../pages/FingeringChart/FingeringChart';
import Home from '../components/Home/Home';
import Game from '../pages/Game/Game';
import Levels from '../components/Levels/Levels';
import Next from '../components/Next/Next';

export default ({ handlePlayAgain, handleNext, handleClick, handleSubmit, findNotes, handleLevel, notes, fingerings, index, message, location, score, randomIndex }) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/finger-chart' component={FingeringChart} />
        <Route path='/game' render={() => <Game index={index} score={score} notes={notes} handleClick={handleClick} handleSubmit={handleSubmit} props={location} randomIndex={randomIndex} />} />
        <Route path='/levels' render={() => <Levels handleLevel={handleLevel} findNotes={findNotes} />} />
        <Route path='/next' render={() => <Next fingerings={fingerings} notes={notes} index={index} score={score} message={message} handleNext={handleNext} handlePlayAgain={handlePlayAgain} randomIndex={randomIndex} /> } />
    </Switch>
)