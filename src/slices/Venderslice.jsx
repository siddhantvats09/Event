import { createSlice } from '@reduxjs/toolkit';

const vender = createSlice({
  name: 'venderlist',
  initialState: [],
  reducers: {
    setvender: (state, action) => {
      return [...state, action.payload];
    },
    deletevender: (state,action)=>{
      state.splice(state.findIndex((arrow) => arrow.id === action.payload), 1)
    },
  },
});

export const { setvender,deletevender} = vender.actions;

export default vender.reducer;