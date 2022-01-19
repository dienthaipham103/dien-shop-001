import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct(state, action) {
            return {...state, ...action.payload}
        },
        removeProduct(state, action) {
            return {}
        }
    }
});

export const { setProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;