import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Sort = {
    name: string,
    sortProperty: 'popular' | '-price' | 'price',
}

interface FilterSliceState {
    currentPage: number,
    sort: Sort,
}

const initialState: FilterSliceState = {
    currentPage: 1,
    sort: {
        name: 'Популярные',
        sortProperty: 'popular',
    },
};

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSort(state, action: PayloadAction<Sort>){
            state.sort = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>){
            state.currentPage = action.payload;
        }
    }
});

export const { setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;