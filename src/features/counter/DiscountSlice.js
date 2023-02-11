import { createSlice } from '@reduxjs/toolkit'
//設定dispatch 方法，設定邏輯 setstate
export const DiscountSlice = createSlice({
    name: 'discount',
    initialState: {
        value: 0
    },
    reducers: {
        discount75: state => {
            state.value =0.75*500
        },
        discount9: state => {
            state.value =0.9*500
        },
        discountincrementByAmount: (state, action) => {
            state.value = action.payload*500
        }
    }
})

// Action creators are generated for each case reducer function
export const { discount9, discount75, discountincrementByAmount } = DiscountSlice.actions

export default DiscountSlice.reducer