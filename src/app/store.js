import { configureStore, createReducer } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import discountReducer from '../features/counter/DiscountSlice'
import CartReducer from '../features/counter/CartSlice'
//概念:設定資料庫 store 
export default configureStore({
    reducer: {
        counter: counterReducer,
        discount:discountReducer,
        cartTotal:CartReducer,
    }
})