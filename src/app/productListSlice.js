import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
}

const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        setProductList(state, action) {
            state.products = action.payload;
        }
    }
});

export const { setProductList } = productListSlice.actions;
export default productListSlice.reducer;