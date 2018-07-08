import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'core-js';
import Box from 'views/box';
import ErrorBoundary from 'views/errorBoundary';
import ErrorComp from 'views/errorComp';
import SelectBox from 'views/selectBox';
import WrapBox from 'views/wrapBox';
import { Router, Route, IndexRedirect, IndexRoute, Link, hashHistory  } from 'react-router';
import reducer from 'views/reducer';
import StuReactRedux from 'views/stu';

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
