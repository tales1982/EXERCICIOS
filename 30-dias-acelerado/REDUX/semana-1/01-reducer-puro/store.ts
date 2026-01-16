import { configureStore } from "@reduxjs/toolkit";
import CartReducer from './cartSlice'

const store = configureStore({
    reducer: {
        carrinho:CartReducer
    }
})

export default store;