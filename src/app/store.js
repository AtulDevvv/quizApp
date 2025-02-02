import { configureStore } from "@reduxjs/toolkit";
import quizDataReducer from '../features/QuizeData/QuizeDataSlice'
const  store=configureStore({
    reducer:{
        quizDatas:quizDataReducer

    }
})

export default store