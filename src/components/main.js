import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Personal from './Personal';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const Main = () => (
    <Switch>
        <Route exact path ="/" component = {LandingPage} />
        <Route path ="/Personal" component = {Personal} />
        <Route path ="/Education" component = {Education} />
        <Route path ="/Experience" component = {Experience} />
        <Route path ="/Skills" component = {Skills} />
        
    </Switch>
)

export default Main