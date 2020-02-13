const { createStore }  = require('redux');
import reducer from './reducers/videosReducer';

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const initialState = {
//   name: 'spot',
//   age: 5,
//   weight: '20 lbs'
// };

// function reducer(state = initialState, action) {
//   switch(action.type) {
//     case 'CHANGE_NAME':
//       return { ...state, name: action.payload };
//     case 'INCREMENT_AGE':
//       return { ...state, age: state.age + 1 };
//     case 'CHANGE_WEIGHT':
//       return { ...state, weight: action.payload };
//     default:
//       return state;
//   }
// }


// store.subscribe(() => {
//   console.log(store.getState());
// })

// console.log(store.getState());
// store.dispatch({ type: 'INCREMENT_AGE' })
// console.log(store.getState());

// store.dispatch({ type: 'CHANGE_NAME', payload: 'rover' });
// console.log(store.getState());
