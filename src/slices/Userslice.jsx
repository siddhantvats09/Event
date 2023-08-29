import { createSlice } from '@reduxjs/toolkit';

const user = createSlice({
  name: 'userlist',
  initialState: [],
  reducers: {
    setuser: (state, action) => {
      return [...state, action.payload];
    }
  },
});

export const { setuser} = user.actions;

export default user.reducer;