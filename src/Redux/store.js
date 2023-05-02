import {configureStore,applyMiddleware} from '@reduxjs/toolkit'
import {logger} from 'redux-logger'
import slice from './slice'

const mystore=configureStore({
    reducer:{
        slice
    }
    
},applyMiddleware(logger))
export default mystore