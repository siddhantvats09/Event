import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'userlist',
  initialState: [],
  reducers: {
    setuser: (state, action) => {
      return [...state, action.payload];
    },
    deleteuser: (state,action)=>{
      state.splice(state.findIndex((arrow) => arrow.id === action.payload), 1)
    },
  },
});

export const { setuser,deleteuser} = user.actions;

export default user.reducer;