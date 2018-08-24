import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { 
    HomePage,
    Teste,
} from '../pages';
import {
} from '../shared/layouts'

const MainRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/teste" component={Teste} />
        </div>
    </Router>
);

export default MainRouter;