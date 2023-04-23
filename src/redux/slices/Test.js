import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({ //склад
  name: 'counter', //название склада
  initialState: {
    count: 0,
  }, //начальное значение
  reducers: { //функции
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions //экспорт функций

export default counterSlice.reducer