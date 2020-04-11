import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import TypeAhead from './Components/TypeAhead/TypeAhead';
import ArrayCardioTwo from './Components/ArrayCardioTwo/ArrayCardioTwo'
import FunWithCanvas from './Components/FunWithCanvas/FunWithCanvas';
import DevToolsDomination from './Components/DevToolsDomination/DevToolsDomination';
import HoldShift from './Components/HoldShift/HoldShift';
import CustomVideoPlayer from './Components/CustomVideoPlayer/CustomVideoPlayer';
import KeySequence from './Components/KeySequenceDetection/KeySequence';

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/typeahead" component={TypeAhead}/>
            <Route path="/arraycardioday2" component={ArrayCardioTwo}/>
            <Route path="/funwithhtml5canvas" component={FunWithCanvas}/>
            <Route path="/devtoolsdomination" component={DevToolsDomination}/>
            <Route path="/holdshiftandcheckcheckboxes" component={HoldShift}/>
            <Route path="/customvideoplayer" component={CustomVideoPlayer} />
            <Route path="/keysequencedetection" component={KeySequence} />
        </Switch>
    </BrowserRouter>
}

export default Router;