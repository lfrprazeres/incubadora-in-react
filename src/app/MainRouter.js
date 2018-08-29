import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { 
    HomePage,
    Team,
} from '../pages';
import {
} from '../shared/layouts'

const MainRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/equipe" component={Team} />
        </div>
    </Router>
);

export default MainRouter;