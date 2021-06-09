import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FingeringChart from '../pages/FingeringChart/FingeringChart';

export default () => (
    <Switch>
        <Route path='/finger-chart' component={FingeringChart}/>
    </Switch>
)