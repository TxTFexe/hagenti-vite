import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Sort = {
    name: string,
    sortProperty: 'popular' | '-price' | 'price',
}

interface FilterSliceState {
    sort: Sort,
}

const initialState: FilterSliceState = {
    sort: {
        name: 'Популярные',
        sortProperty: 'popular',
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },
    }
});

export const { setSort } = filterSlice.actions;

export default filterSlice.reducer;