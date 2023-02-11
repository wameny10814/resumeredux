import { createSlice } from '@reduxjs/toolkit'
//設定dispatch 方法，設定邏輯 setstate
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            if(state.value>=0){
                state.value += 1
            }else{
                state.value = 1
            }
        },
        decrement: state => {
            if(state.value>=1){
                state.value -= 1
            }else{
                state.value =0
            }
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer