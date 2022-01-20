import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer,
  },
});

// index.js
// import {reducer} './reducer.js'

// const store = createStore(reducer)

// // reducer.js
// const reducer = combineReducers({
//   counter : counterReducer,
//   post : postReducer
// })

// export const reducer
