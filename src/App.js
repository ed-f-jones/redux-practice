import React from "react";
import Counter from "./Counter";
import {createStore} from 'redux';
import {DECREASE, RESET, INCREASE} from "./actions"; 
import reducer from "./reducers";
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";

// set intial state
const defaultSate = {
  count: 69,
  name: "Edward"
}

// setup store
 const store = createStore(reducer,defaultSate,composeWithDevTools());
 


const App = () => {
  return(
  <Provider store={store}>
   <Counter random="random value" />;
  </Provider>
  );
};

export default App;
