import instance, { axiosInstance } from "./axios"

const login=async(data)=>{
    try {
        const result=await instance.post("adminLogin",data);
        return result;

    } catch (error) {
        console.log("error",error)
    }
}

const getNewRequests=async()=>{
    try {
        const result=await instance.get("showAllNewRequestCall",{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`}
        });
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

const getCompletedRequests=async()=>{
    try {
        const result=await instance.get("showAllCompletedRequestCall",{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`}
        })
        return result
    } catch (error) {
        console.log("error",error)
    }
}

const getNewTransportQuotes=async()=>{
    try {
        const result=await instance.get("showAllNewTransportQuote",{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`}
        });
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

const getCompletedTransportQuotes=async()=>{
    try {
        const result=await instance.get("showAllCompletedTransportQuote",{
            headers:{
                Authorization: `Bearer ${localStorage.getItem("token")}`}
        });
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

const completeRequestCall=async(id)=>{
    try {
        const result=await axiosInstance.put(`completeRequestCall/${id}`);
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

const completedQuoteRequest=async(id)=>{
    try {
        const result=await axiosInstance.put(`completeTransportQuote/${id}`)
        return result
    } catch (error) {
        console.log("error",error)
    }
}

const fetchNewDriver=async()=>{
    try {
        const result=await axiosInstance.get("showAllDriver");
        return result
    } catch (error) {
        console.log("error",error)
    }
}

export {login,getNewRequests,getCompletedRequests,getNewTransportQuotes,getCompletedTransportQuotes,completeRequestCall,completedQuoteRequest,fetchNewDriver}