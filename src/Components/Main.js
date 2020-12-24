import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';

const Main = () => (
    <Switch>
        <Route exact path="/My-Portfolio" component={LandingPage} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
    </Switch>
)

export default Main;