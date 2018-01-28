import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import reducer from './reducers'
import { persistStore, autoRehydrate } from 'redux-persist'

import Navigation from './components/Navigation';
import HomeIndex from './components/HomeIndex';
import Customer from './components/Customer'
import Signup from './components/Signup'
import Login from './components/Login'

import FacebookOauth from './components/FacebookOauth'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import './styles/app.scss';
import './fonts/Eng/Nunito-Bold.ttf';
import './fonts/Eng/Nunito-ExtraBold.ttf';
import './fonts/Eng/Nunito-Regular.ttf';
import './fonts/Eng/Nunito-SemiBold.ttf';
import './fonts/Thai/Prompt-Light.ttf';
import myImg from './asset/missing.png'
import 'bootstrap';

import jwt from 'jsonwebtoken'
import { setCurrentUser } from './actions/AuthActions'

import setAuthorizationToken from './helpers/util/setAuthorizationToken'
import requiredAuth from './helpers/util/requiredAuth'

const store = createStore(
    reducer,
    undefined,
    compose(
        applyMiddleware(thunk, promise),
        autoRehydrate()
    )
)

persistStore(store)

const router = () => {
    return (
        <Router>
            <div>
                <div className='container-fluid'>
                    <Navigation />
                </div>
                <Switch>
                    <Route path="/facebook_oauth" component={FacebookOauth} />
                    <Route path="/customer" component={requiredAuth(Customer)} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/" component={HomeIndex} />
                </Switch>
            </div>
        </Router>
    );
}

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    stepper: {
        iconColor: 'black',
        inactiveIconColor: '#C58A02'
    }
});

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken)
    store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}


ReactDom.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            {router()}
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
)