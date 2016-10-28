import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers/index';
import routes from './config/routes';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { listenToAuth } from './actions/auth';


injectTapEventPlugin()

const logger = createLogger();
const middlewares = [ReduxThunk, logger];

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify here name, actionsBlacklist, actionsCreators and other options
      }) : compose;


const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middlewares)
))

store.dispatch(listenToAuth())

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
