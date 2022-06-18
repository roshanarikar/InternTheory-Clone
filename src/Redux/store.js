import { 
  legacy_createStore, 
  combineReducers, 
  applyMiddleware, 
  compose } 
  from "redux";

import thunk from "redux-thunk";
import productReducer from "./Products/reducer"

const rootReducer = combineReducers ({ecommerceData: productReducer})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store


