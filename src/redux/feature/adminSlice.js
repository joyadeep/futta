import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newRequest:[],
  completedRequest:[],
  newTransportQuote:[],
  completedTransprtQuote:[],
  newDriver:[]
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
    completeRequest:(state,action)=>{
      const final=state.newRequest.filter(req=>req.id!==action.payload.id);
      state.newRequest=final
      state.completedRequest=[...state.completedRequest,action.payload]
    },
    getNewQuote:(state,action)=>{
      state.newTransportQuote=action.payload
    },
    getCompletedQuote:(state,action)=>{
      state.completedTransprtQuote=action.payload
    },
    completeQuote:(state,action)=>{
      const final=state.newTransportQuote.filter(item=>item.id!==action.payload.id);
      state.newTransportQuote=final
      state.completedTransprtQuote=[...state.newTransportQuote,action.payload]
    },
    getNewDriver:(state,action)=>{
      state.newDriver=action.payload
    }

  }

})

export const {getNewRequest,getCompletedRequest,completeRequest,getNewQuote,getCompletedQuote,completeQuote,getNewDriver}= adminSlice.actions;
export default adminSlice.reducer