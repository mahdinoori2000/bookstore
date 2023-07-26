import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catagories: [],
};

const catagoriesSlice = createSlice({
  name: 'catagories',
  initialState,
  reducers: {
    checkCatagories(state) {
      state.catagories = ['Under constructions'];
    },
  },
});

export const checkCatagories = catagoriesSlice.reducer;
export default catagoriesSlice.reducer;
