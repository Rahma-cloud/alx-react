import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore } from 'react-redux';
import { Provider } from "react-redux";
import uiReducer from './reducers/uiReducer';

const store = createStore(uiReducer);

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
