import {DECREASE, RESET, INCREASE} from "./actions";
const defaultSate = {
  count: 0,
  name: "Edward"
}
// setup reducer
export default function reducer(state=defaultSate, action){
    //console.log({state, action})
    //if(action.type=== "DECREASE") {
      //state.count = state.count -1;
     // return state;
    // return {...state, count:state.count -1}
   //}
   switch (action.type) {
     case DECREASE:
       return {...state, count: state.count -1};
  
       case INCREASE:
         return {...state, count: state.count + 1};
  
         case RESET:
           return {...state, count: 0 };
           default:
           return state;
         }
    
  }