import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import Landing from './components/Landing';
import Lobby from './components/Lobby';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    return (
        <Provider store={store}>
            <Fragment>
                <Router>
                    <Route exact path='/' component={Landing} />
                    <section className='container'>
                        {/* <Alert /> */}
                        <Switch>
                            <Route exact path='/lobby' component={Lobby} />
                        </Switch>
                    </section>
                </Router>
            </Fragment>
        </Provider>
    );
}

export default App;
