import { configureStore } from "@reduxjs/toolkit";
import Userslice from "../slices/Userslice";
import Venderslice from "../slices/Venderslice";

const store = configureStore({
    reducer: {
      userlist:Userslice,
      venderlist:Venderslice,
    },
  });
  
  export default store;