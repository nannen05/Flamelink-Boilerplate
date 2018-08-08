import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./store/reducers";
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { createBrowserHistory } from 'history';
import { DATAREF } from './firebase'
import App from "./App";
//import registerServiceWorker from "./registerServiceWorker";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const history = syncHistoryWithStore(createBrowserHistory(), store);

import './index.css'

store.subscribe(() => console.log('Look ma, Redux!!'))

DATAREF.on("value", snapshot => {
	console.log(snapshot.val())
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={App}/>
        <Route path="bar" component={App}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
