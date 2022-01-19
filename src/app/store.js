import { configureStore } from '@reduxjs/toolkit';
import productListReducer from './productListSlice';
import productDetailReducer from './productDetailSlice';

const rootReducer = {
    productList: productListReducer,
    product: productDetailReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;