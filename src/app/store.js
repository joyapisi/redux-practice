import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;

// https://redux-toolkit.js.org/tutorials/quick-start
// https://www.youtube.com/watch?v=u3KlatzB7GM
