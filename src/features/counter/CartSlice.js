import { createSlice } from '@reduxjs/toolkit'
import { DonutsData } from '../DonutsData'
//reducer
//設定dispatch 方法，設定邏輯 setstate
export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [
            {   
                "id":0,
                "key":0,
                "name": '',
                "quantity":0,
                "price": 0,
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
        //刪除該項目，
        dataDel: (state, action) => {
            // state.value=state.value.filter((user) => user.key !== action.payload.key);
            state.value = state.value.filter((user) => action.payload.key.includes(user.key) === false)
        },
        plus: (state, action) => {
            
            state.value.filter((user) => action.payload.key !== 0).map((cart) => {
                if (cart.id ===action.payload.id) {
                    if(cart.quantity>=1){
                        cart.quantity += 1; 
                        cart.total = cart.quantity*cart.price;
                    }else{
                        cart.quantity =cart.quantity; 
                        cart.total = cart.quantity*cart.price;
                    }
                }
            })
        },
        deduction: (state, action) => {
            
            state.value.filter((user) => action.payload.id !== 0).map((cart) => {
                if (cart.id ===action.payload.id ) {
                    if(cart.quantity>1){
                        cart.quantity -= 1; 
                        cart.total = cart.quantity*cart.price;
                    }else{
                        cart.quantity =cart.quantity; 
                        cart.total = cart.quantity*cart.price;
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