
// Importing the data from external source (API)

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: null,
    isLoading: false,
    error: null,
  };


const dataSlice = createSlice({
name: 'data',
initialState,
reducers: {}, // We don't need traditional reducers for data fetching
extraReducers: (builder) => {
    builder
        .addCase(fetchData.pending, (state) => {
            state.isLoading = true;
            state.error = null; // Reset error on pending fetch
        })
        .addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
            // console.log(state.data)
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Failed to fetch data';
        });
},
});


export const fetchData = createAsyncThunk(
    'data/fetchData',
    async () => {
      try {
        const response = await fetch('../../../../../public/testData/Carl Rogers Counsels An Individual On Anger_pretty_tx.json');
        return await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
      }
    }
  );


  export default dataSlice.reducer;