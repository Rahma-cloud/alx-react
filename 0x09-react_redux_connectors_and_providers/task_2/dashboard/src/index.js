import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore, applyMMiddleware } from 'react-redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
