import { createSlice } from '@reduxjs/toolkit'
//設定dispatch 方法，設定邏輯 setstate
export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0
    },
    reducers: {
     
        addCart: (state, action) => {
            // state.value.push(1);
            // state.value.push(1).reduce((a,b)=>a+b)
               state.value += 1
        },
        discountincrementByAmount: (state, action) => {
            state.value = action.payload*500
        }
    }
})

// Action creators are generated for each case reducer function
export const { addCart, discountincrementByAmount } = CartSlice.actions

export default CartSlice.reducer