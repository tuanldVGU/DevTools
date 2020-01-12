const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  isAuthenticated: false
}

//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'CER_AUTHENTICATE') {
    return {
      ...state,
      isAuthenticated: action.value
    }
  }
  return state;
}

//Store
const store = createStore(rootReducer); 

//Subscription
store.subscribe(()=>{
  console.log('[Subscription]',store.getState());
});
//Dispatching Action
store.dispatch({type: 'CER_AUTHENTICATE', value: true});
store.dispatch({type: 'CER_LOGOUT', value: false});
store.dispatch({type: 'CER_ADD_USER'});

