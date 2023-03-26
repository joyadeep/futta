import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  newRequest:[],
  completedRequest:[],
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
    }
  }

})

export const {getNewRequest,getCompletedRequest}= adminSlice.actions;
export default adminSlice.reducer