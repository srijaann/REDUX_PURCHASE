//Importing Redux store and middleware libs

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "react-thunk";
import rootReducer from "./reducers";

//Store must have initial state

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;
