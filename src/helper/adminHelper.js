import instance from "./axios"

const config={
    headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`}
}

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
        const result=await instance.get("showAllNewRequestCall",config);
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

const getCompletedRequests=async()=>{
    try {
        const result=await instance.get("showAllCompletedRequestCall",config)
        return result
    } catch (error) {
        console.log("error",error)
    }
}

const getNewTransportQuotes=async()=>{
    try {
        const result=await instance.get("showAllNewTransportQuote",config);
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

const getCompletedTransportQuotes=async()=>{
    try {
        const result=await instance.get("showAllCompletedTransportQuote",config);
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

export {login,getNewRequests,getCompletedRequests,getNewTransportQuotes,getCompletedTransportQuotes}