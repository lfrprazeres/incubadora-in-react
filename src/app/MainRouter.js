import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { 
    HomePage,
    Team,
    Opportunities
} from '../pages';
import {
} from '../shared/layouts'

const MainRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/equipe" component={Team} />
            <Route path="/oportunidades" component={Opportunities} />
        </div>
    </Router>
);

export default MainRouter;