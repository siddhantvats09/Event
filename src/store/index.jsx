import { configureStore } from '@reduxjs/toolkit';
import Userslice from '../slices/Userslice';


const store = configureStore({
  reducer: {
    user: Userslice,
    
    // other reducers...
  },
});

export default store;