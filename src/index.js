import React from 'react'
import ReactDOM from 'react-dom';

import rootReducer from './reducers/index'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(rootReducer);

import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

import AppLayout from './components/layout';
import NotFound from './pages/404/index';


import routes from './common/routes';


const App = ({ store }) => {

    return (
        <Provider store={store}>
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
                        <Route exact path='*' component={NotFound} />
                    </Switch>
                </AppLayout>
            </Router>
        </Provider>
    )
}

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);