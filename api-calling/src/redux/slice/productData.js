import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("fetchingData",async () => {
    const response = await fetch("https://dummyjson.com/products")
    return response.json()
})

const productsSlice = createSlice({
    name:"products",
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },
    extraReducers:(builder) => {
        builder.addCase(fetchData.pending,(state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchData.fulfilled,(state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchData.rejected,(state,action) => {
            console.log("ERROR",action.payload);
            state.isError = true
        });
    }
});

export default productsSlice.reducer;