import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading:false
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoadingTrue:(state,action)=>{
        state.isLoading=true
    },
    setLoadingFalse:(state,action)=>{
        state.isLoading=false
    }
  }
})
export const {setLoadingFalse,setLoadingTrue}=globalSlice.actions;
export default globalSlice.reducer

