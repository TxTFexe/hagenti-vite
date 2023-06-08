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
    checkedItems: CartItem[];
    totalCheckedCount: number;
    totalCheckedPrice: number;
}

const { items, totalPrice, totalCount } = getCartFromLS();

const initialState: CartSliceState = {
    totalCount,
    totalPrice,
    items,
    checkedItems: [],
    totalCheckedCount: 0,
    totalCheckedPrice: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = findItemInCart(state.items, action.payload.id)

            if (findItem) {
                findItem.count++;
            } else {
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
            state.checkedItems = state.checkedItems.filter(obj => obj.id !== action.payload);
            state.totalPrice = calcTotalPrice(state.items)
            state.totalCount = calcTotalCount(state.items)
            state.totalCheckedPrice = calcTotalPrice(state.items)
            state.totalCheckedCount = calcTotalCount(state.items)
        },
        clearItems(state) {
            state.items = [];
            state.checkedItems = [];
            state.totalCount = 0;
            state.totalPrice = 0;
            state.totalCheckedCount = 0;
            state.totalCheckedPrice = 0;
        },
        incrementItemCount(state, action: PayloadAction<CartItem>) {
            const findItem = findItemInCart(state.items, action.payload.id)

            if (findItem) {
                findItem.count++;
            } else {
                return;
            }

            state.totalPrice = calcTotalPrice(state.items)
            state.totalCount = calcTotalCount(state.items)

            const findCheckedItem = findItemInCart(state.checkedItems, action.payload.id)

            // if (findCheckedItem) {
            //     findCheckedItem.count++;
            // } else {
            //     return;
            // }

            if (findCheckedItem) {
                state.totalCheckedPrice = calcTotalPrice(state.items)
                state.totalCheckedCount = calcTotalCount(state.items)
            }
        },
        decrementItemCount(state, action: PayloadAction<CartItem>) {
            const findItem = findItemInCart(state.items, action.payload.id)

            if (findItem) {
                if (findItem.count > 1)
                    findItem.count--;
            } else {
                return;
            }

            state.totalPrice = calcTotalPrice(state.items)
            state.totalCount = calcTotalCount(state.items)

            const findCheckedItem = findItemInCart(state.checkedItems, action.payload.id)

            // if (findCheckedItem) {
            //     if (findCheckedItem.count > 1)
            //         findCheckedItem.count--;
            // } else {
            //     return;
            // }

            if (findCheckedItem) {
                state.totalCheckedPrice = calcTotalPrice(state.items)
                state.totalCheckedCount = calcTotalCount(state.items)
            }
        },
        addCheckedItem(state, action: PayloadAction<CartItem>) {
            const findItem = findItemInCart(state.items, action.payload.id)

            if (findItem) {
                state.checkedItems.push(action.payload);
            }

            state.totalCheckedPrice = calcTotalPrice(state.checkedItems)
            state.totalCheckedCount = calcTotalCount(state.checkedItems)
        },
        removeCheckedItem(state, action: PayloadAction<string>) {
            state.checkedItems = state.checkedItems.filter(obj => obj.id !== action.payload);
            state.totalCheckedPrice = calcTotalPrice(state.checkedItems)
            state.totalCheckedCount = calcTotalCount(state.checkedItems)
        },
    }
});

export const { addItem, removeItem, clearItems, decrementItemCount, incrementItemCount, addCheckedItem, removeCheckedItem } = cartSlice.actions;

export default cartSlice.reducer;