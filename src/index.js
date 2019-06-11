import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Accueil from './components/Accueil';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Realisations from './components/Realisation';





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Accueil}/> {/* <Route path='/nos-valeurs' component={MainValeurs} /> */}
            <Route path='/competences' component={Competences}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/realisations' component={Realisations}/>
        </Route>
    </Router>
), document.getElementById("app"));