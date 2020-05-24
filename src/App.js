import React from "react";
import Counter from "./Counter";
import {createStore} from 'redux';

// set intial state
const defaultSate = {
  count: 69,
  name: "Edward"
}
// setup reducer
function reducer(state, action){
  //console.log({state, action})
  //if(action.type=== "DECREASE") {
    //state.count = state.count -1;
   // return state;
  // return {...state, count:state.count -1}
 //}
 switch (action.type) {
   case "DECREASE":
     return {...state, count: state.count -1};

     case "INCREASE":
       return {...state, count: state.count + 1};

       case "RESET":
         return {...state, count: 0 };
         default:
         return state;
       }
  
}
// setup store
 const store = createStore(reducer, defaultSate);
 store.dispatch({type:"DECREASE"});
 store.dispatch({type: "INCREASE"});
 store.dispatch({type: "RESET"});
 console.log(store.getState());
const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
