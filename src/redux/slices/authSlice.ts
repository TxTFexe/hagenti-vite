import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import axios from '../../axios';

enum Status {
      LOADING = 'loading',
      SUCSESS = 'sucsess',
      ERROR = 'error',
}

export type LoginData = {
      email: string;
      password: string;
}

export const fetchAuth = createAsyncThunk<LoginData, LoginData>('/auth/fetchUserData', async (params) => {
      const { data } = await axios.post<LoginData>("auth/login", params);
      return data;
})

export const fetchAuthMe = createAsyncThunk<LoginData>('/auth/fetchAuthMe', async () => {
      const { data } = await axios.get<LoginData>("auth/me");
      return data;
})

const initialState = {
      data: null,
      status: Status.LOADING,
}

const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
            logout: (state) => {
                  state.data = null;
                  window.localStorage.removeItem('token');
            }
      },
      extraReducers: (builder) => {
            builder.addCase(fetchAuth.pending, (state) => {
                  state.status = Status.LOADING;
                  state.data = null;
            })
            builder.addCase(fetchAuth.fulfilled, (state, action: any) => {
                  state.status = Status.SUCSESS;
                  state.data = action.payload;
            })
            builder.addCase(fetchAuth.rejected, (state) => {
                  state.status = Status.ERROR;
                  state.data = null;
            })

            builder.addCase(fetchAuthMe.pending, (state) => {
                  state.status = Status.LOADING;
                  state.data = null;
            })
            builder.addCase(fetchAuthMe.fulfilled, (state, action: any) => {
                  state.status = Status.SUCSESS;
                  state.data = action.payload;
            })
            builder.addCase(fetchAuthMe.rejected, (state) => {
                  state.status = Status.ERROR;
                  state.data = null;
            })
      }

})

export const selectIsAuth = (state: { auth: { data: any; }; }) => Boolean(state.auth.data)

export const { logout } = authSlice.actions

export default authSlice.reducer;