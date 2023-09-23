import {configureStore} from '@reduxjs/toolkit'
import dataReducer from './dataslice'
export default configureStore({
    reducer:{
        data:dataReducer
    }
})