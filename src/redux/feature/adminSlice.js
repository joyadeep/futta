import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newRequest:[],
  completedRequest:[],
  newTransportQuote:[],
  completedTransprtQuote:[]
}

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    getNewRequest:(state,action)=>{
        state.newRequest=action.payload;
    },
    getCompletedRequest:(state,action)=>{
        state.completedRequest=action.payload;
    },
    getNewQuote:(state,action)=>{
      state.newTransportQuote=action.payload
    },
    getCompletedQuote:(state,action)=>{
      state.completedTransprtQuote=action.payload
    }
  }

})

export const {getNewRequest,getCompletedRequest,getNewQuote,getCompletedQuote}= adminSlice.actions;
export default adminSlice.reducer