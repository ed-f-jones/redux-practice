import React from "react";
import Counter from "./Counter";
import {createStore} from 'redux';
import {DECREASE, RESET, INCREASE} from "./actions"; 
import reducer from "./reducers";
import {Provider} from 'react-redux';


// set intial state
const defaultSate = {
  count: 69,
  name: "Edward"
}

// setup store
 const store = createStore(reducer, defaultSate);
 


const App = () => {
  return(
  <Provider store={store}>
   <Counter />;
  </Provider>
  );
};

export default App;
