import {configureStore} from '@reduxjs/toolkit'
import productsReducer from './slice/productData'

export const store = configureStore({
    reducer:{
        products:productsReducer,
    }

})