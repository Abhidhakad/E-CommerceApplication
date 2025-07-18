import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./Slices/categorySlice";
import cartReducer from "./Slices/cartSlice"
export const store = configureStore({
    reducer:{
        category: categoryReducer,
        cart:cartReducer
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;