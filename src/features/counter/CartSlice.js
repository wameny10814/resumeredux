import { createSlice } from '@reduxjs/toolkit'
import { DonutsData } from '../DonutsData'
//reducer
//設定dispatch 方法，設定邏輯 setstate
export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: [
            {   
                "orderid":0,
                "id":0,
                "key":0,
                "name": '',
                "quantity":0,
                "price": 0,
                "total":0,
                "incre":'',
                "decre":'',
                "firstname":'',
                "lastname":'',
                "email":'',
                "address":'',
                "orderdate":'',
            },
        ]
    },
    reducers: {
        dataReset: (state, action) => {
            state.value = state.value.filter((user) => user.key !== 0);
        },
        addCart: (state, action) => {
            //先檢查現在的購物車清單裡面有沒有相同品項
            let filtter =  state.value.find((user) =>user.id == action.payload.id);
                if (filtter) {
                    filtter.quantity += action.payload.quantity;
                    filtter.total += action.payload.total*1;
                    
                }else{
                    state.value.push(action.payload);
                }
        
            
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
        },
        inputotherinfo: (state, action) => {
            state.value = state.value.map(cart => {
                if (cart.key === 0) {
                    return {
                        ...cart,
                        firstname: action.payload.firstname,
                        lastname: action.payload.lastname,
                        email: action.payload.email,
                        address: action.payload.address,
                        orderid: action.payload.orderid,
                        orderdate: action.payload.orderdate,
                        
                    };
                }
                return cart;
            });
                        
                    
        },

        deleteall: (state, action) => {
            state.value =[
                {   
                    "orderid":0,
                    "id":0,
                    "key":0,
                    "name": '',
                    "quantity":0,
                    "price": 0,
                    "total":'',
                    "incre":'',
                    "decre":'',
                    "firstname":'',
                    "lastname":'',
                    "email":'',
                    "address":'',
                    "orderdate":'',
                }
            ]
        }
        
    }
})

// Action creators are generated for each case reducer function
export const { dataReset, addCart, dataDel, plus,deduction, discountincrementByAmount,inputotherinfo,deleteall } = CartSlice.actions

export default CartSlice.reducer