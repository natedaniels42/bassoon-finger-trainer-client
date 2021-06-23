import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FingeringChart from '../pages/FingeringChart/FingeringChart';
import Home from '../components/Home/Home';
import Game from '../pages/Game/Game';
import Levels from '../components/Levels/Levels';
import Next from '../components/Next/Next';

export default ({ handleClick, handleSubmit, findNotes, handleLevel, location }) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/finger-chart' component={FingeringChart} />
        <Route path='/game' render={() => <Game handleClick={handleClick} handleSubmit={handleSubmit} props={location} />} />
        <Route path='/levels' render={() => <Levels handleLevel={handleLevel} findNotes={findNotes} />} />
        <Route path='/next' component={Next} />
    </Switch>
)