import { createSlice } from '@reduxjs/toolkit'
import { DonutsData } from '../DonutsData'
//設定dispatch 方法，設定邏輯 setstate
export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: DonutsData

    },
    reducers: {
        dataReset: (state, action) => {
            state.value=state.value.filter((user) => user.key !== 0);
        },
        addCart: (state, action) => {
            // state.value.push(1);
            // state.value.push(1).reduce((a,b)=>a+b)
            state.value=state.value.filter((user) => user.key !== 0);
            state.value.push(action.payload);
        },
        dataDel: (state, action) => {
            // state.value=state.value.filter((user) => user.key !== action.payload.key);
            state.value=state.value.filter((user) => action.payload.key.includes(user.key) === false  )
        },
        discountincrementByAmount: (state, action) => {
            state.value = action.payload * 500
        }
    }
})

// Action creators are generated for each case reducer function
export const { dataReset,addCart,dataDel, discountincrementByAmount } = CartSlice.actions

export default CartSlice.reducer