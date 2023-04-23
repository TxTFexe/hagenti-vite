import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchSliceState {
  searchValue: string;
}

const initialState: SearchSliceState = {
  searchValue: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
