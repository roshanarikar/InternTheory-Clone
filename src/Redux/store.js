import { 
  legacy_createStore, 
  combineReducers, 
  applyMiddleware, 
  compose } 
  from "redux";

import thunk from "redux-thunk";
import  productReducer  from "./Interships/reducer";
import  cartReducer  from "./jobs/reducer";

const rootReducer = combineReducers ({ecommerceData: productReducer , cartData: cartReducer})

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);




