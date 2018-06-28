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
import NotFoundPage from './pages/NotFoundPage/index'


import routes from './components/routes';



const App = () => (
    <Router history={history}>
        <AppLayout>
            <Switch>
                {
                    routes.map(({ path, component }, index) => (
                        <Route key={index}
                            exact
                            path={path}
                            component={component}
                        />
                    ))
                }
                <Route exact path='*' component={NotFoundPage} />
            </Switch>
        </AppLayout>
    </Router>
)

ReactDOM.render(
    <App />,
    document.getElementById('root')
);