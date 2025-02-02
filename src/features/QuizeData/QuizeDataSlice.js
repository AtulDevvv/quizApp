import { createAsyncThunk,createSelector,createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";





const initialState={
    quizData:{},
    status:'idle',
    error:null,
    score:0
    
}

const API_URL='/api'



export const fetchQuizData=createAsyncThunk('quizData/fetching',async()=>{
    try{
        const response=await axios.get(API_URL)
        const data= response.data
        console.log(data)
        return data
    }
    catch(err){
        console.log(err.message)
    }
})

export const  QuizeDataSlice=createSlice({
    name:'quizDatas',
    initialState,
    reducers:{
       addScore:{
        reducer(state,action){
            state.score+=action.payload;
        }
       }
    },
    extraReducers(builder){
        builder
        .addCase(fetchQuizData.pending,(state,action)=>{
            state.status='Loading'

        })
        .addCase(fetchQuizData.fulfilled,(state,action)=>{
            state.status="succeeded"
           state.quizData={...action.payload}
            
            
        })
        .addCase(fetchQuizData.rejected,(state,action)=>{
            state.status='failed'
            state.error=action.message

        })
    }
})
export const {addScore}=QuizeDataSlice.actions

export default QuizeDataSlice.reducer;