import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface CartItem {
    id: number,
    title: string;
    description:string;
    price: number;
    image:string;
    quantity: number;
}

const initialState: CartItem[] = [];

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.push(action.payload);
            }
        },
        removeItem: (state, action:PayloadAction<number>) => {
           return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;