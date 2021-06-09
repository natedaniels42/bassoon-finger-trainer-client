import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FingeringChart from '../pages/FingeringChart/FingeringChart';
import Home from '../components/Home/Home';

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/finger-chart' component={FingeringChart}/>
    </Switch>
)