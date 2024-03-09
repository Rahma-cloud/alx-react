import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore, applyMMiddleware, compose } from 'react-redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
