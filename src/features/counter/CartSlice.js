import { createSlice } from '@reduxjs/toolkit'
import { DonutsData } from '../DonutsData'
//設定dispatch 方法，設定邏輯 setstate
export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [
            {
                "name": '',
                "price": '',
                "key":0,
                "count":0,
                "total":'',
                "incre":'',
                "decre":'',
            },
        ]
    },
    reducers: {
        dataReset: (state, action) => {
            state.value = state.value.filter((user) => user.key !== 0);
        },
        addCart: (state, action) => {
            // state.value.push(1);
            // state.value.push(1).reduce((a,b)=>a+b)
            // state.value = state.value.filter((user) => user.key !== 0);
            state.value.push(action.payload);
        },
        dataDel: (state, action) => {
            // state.value=state.value.filter((user) => user.key !== action.payload.key);
            state.value = state.value.filter((user) => action.payload.key.includes(user.key) === false)
        },
        plus: (state, action) => {
            
            state.value.filter((user) => action.payload.key !== 0).map((cart) => {
                if (cart.key ===action.payload.key) {
                    if(cart.count>=1){
                        cart.count += 1; 
                        cart.total = cart.count*cart.price;
                    }else{
                        cart.count =cart.count; 
                        cart.total = cart.count*cart.price;
                    }
                }
            })
        },
        deduction: (state, action) => {
            
            state.value.filter((user) => action.payload.key !== 0).map((cart) => {
                if (cart.key ===action.payload.key ) {
                    if(cart.count>1){
                        cart.count -= 1; 
                        cart.total = cart.count*cart.price;
                    }else{
                        cart.count =cart.count; 
                        cart.total = cart.count*cart.price;
                    }
                }
            })
        },
        discountincrementByAmount: (state, action) => {
            state.value = action.payload * 500
        }
    }
})

// Action creators are generated for each case reducer function
export const { dataReset, addCart, dataDel, plus,deduction, discountincrementByAmount } = CartSlice.actions

export default CartSlice.reducer