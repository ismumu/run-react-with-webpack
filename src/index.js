import React from 'react'
import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';

import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

import AppLayout from './components/layout';


import Index from './pages/index/index';
import About from './pages/about/index';
import Case from './pages/case/index';



const App = () => (
    <Router history={history}>
        <AppLayout>
            <Switch>
                <Route exact path='/' component={Index}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/case' component={Case}/>
            </Switch>
        </AppLayout>
    </Router>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);