import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Lobby from './components/Lobby';

function App() {
    return (
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
    );
}

export default App;
