import { configureStore } from '@reduxjs/toolkit'

import productReducer from "../redux/features/products/productSlice"
import cartReducer from "../redux/features/carts/cartSlice"

const store = configureStore({
    reducer:{
        products: productReducer,
        carts: cartReducer
    }
})

export default store;