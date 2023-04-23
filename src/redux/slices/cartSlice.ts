import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { calcTotalCount } from "../../utils/calcTotalCount";
import { findItemInCart } from "../../utils/findItemInCart";

export type CartItem = {
    id: string,
    pic: string,
    type: string,
    name: string,
    price: number,
    count: number
}

interface CartSliceState {
    totalCount: number;
    totalPrice: number;
    items: CartItem[];
}

const { items, totalPrice, totalCount } = getCartFromLS();

const initialState: CartSliceState = {
    totalCount,
    totalPrice,
    items,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = findItemInCart(state.items, action.payload.id)

            if (findItem) {
                findItem.count++;
            } else{
                state.items.push({
                    ...action.payload, 
                    count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items)
            state.totalCount = calcTotalCount(state.items)
        },
        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload);
            state.totalPrice = calcTotalPrice(state.items)
            state.totalCount = calcTotalCount(state.items)
        },
        clearItems(state) {
            state.items = [];
            state.totalCount = 0;
            state.totalPrice = 0;
        },
        incrementItemCount(state, action: PayloadAction<CartItem>){
            const findItem = findItemInCart(state.items, action.payload.id)

            if (findItem) {
                findItem.count++;
            } else{
                return;
            }

            state.totalPrice = calcTotalPrice(state.items)
            state.totalCount = calcTotalCount(state.items)
        },
        decrementItemCount(state, action: PayloadAction<CartItem>){
            const findItem = findItemInCart(state.items, action.payload.id)

            if (findItem) {
                if(findItem.count > 1)
                findItem.count--;
            } else{
                return;
            }

            state.totalPrice = calcTotalPrice(state.items)
            state.totalCount = calcTotalCount(state.items)
        }
    }
});

export const { addItem, removeItem, clearItems, decrementItemCount, incrementItemCount } = cartSlice.actions;

export default cartSlice.reducer;