import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import "./sass/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import { SearchProvider } from "./util/context";

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <SearchProvider>
      <Router>
        <App />
      </Router>
    </SearchProvider>
  </Provider>,
  document.getElementById("root")
);
