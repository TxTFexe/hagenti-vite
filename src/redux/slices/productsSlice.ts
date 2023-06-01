import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { CartItem } from "./cartSlice";

type Product = {
  id: string,
  pic: string,
  type: string,
  name: string,
  price: number,
  count: number
}

type FetchProductsParams = {
  sortBy: string;
  order: string;
  currentPage: number;
  searchValue: string;
  category: string;
}

enum Status {
  LOADING = 'loading',
  SUCSESS = 'sucsess',
  ERROR = 'error',
}

interface ProductsSliceState {
  items: Product[];
  status: Status;
}

export const fetchProducts = createAsyncThunk<Product[], FetchProductsParams>(
  "product/fetchProductsStatus",
  async (params) => {
    const { sortBy, order, currentPage, searchValue, category } = params;
    console.log(currentPage)
    const { data } = await axios.get<Product[]>(
      `https://6395a92790ac47c680703bcd.mockapi.io/${category}?page=${currentPage}&limit=10&sortBy=${sortBy}&order=${order}&search=${searchValue}`
    );
    return data;
  }
); //Buisness logic

const initialState: ProductsSliceState = {
  items: [],
  status: Status.LOADING, // loading | sucsess | error
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    })

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCSESS;
    })

    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  }
  // extraReducers: {
  //   [fetchProducts.pending]: (state) => {
  //     state.status = "loading";
  //     state.items = [];
  //   },
  //   [fetchProducts.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = "sucsess";
  //   },
  //   [fetchProducts.rejected]: (state) => {
  //     state.status = "error";
  //     state.items = [];
  //   },
  // },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
