import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'core-js';
import Box from './box';
import ErrorBoundary from './errorBoundary';
import ErrorComp from './errorComp';
import SelectBox from './selectBox';
import WrapBox from './wrapBox';
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router';
import reducer from './reducer';
import StuReactRedux from './stu';

const store = createStore(
    combineReducers({
        ...{counter:reducer}
    })
)

const render = function render() {
    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/">
                    {/*<IndexRedirect to="/index" />*/}
                    {/*<Route path="index" component={PageIndex} />*/}
                    <IndexRoute component={Box}/>
                    <Route path="demo" component={StuReactRedux} />
                </Route>
            </Router>
        </Provider>,
        document.getElementById('root'),
    );
};

render();
