import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { 
    HomePage,
    Team,
    Opportunities,
    PatentDatabase,
    FrequentQuestions,
    ResidentCompanies
} from '../pages';
import {
} from '../shared/layouts'

const MainRouter = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/equipe" component={Team} />
            <Route path="/oportunidades" component={Opportunities} />
            <Route path="/banco-de-patentes" component={PatentDatabase} />
            <Route path="/perguntas-frequentes" component={FrequentQuestions} />
            <Route path="/empresas-residentes" component={ResidentCompanies} />
        </div>
    </Router>
);

export default MainRouter;