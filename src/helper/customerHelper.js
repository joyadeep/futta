import instance from './axios'

const requestCall=async(data)=>{
    try {
        const res=await instance.post("createRequestCall",data)
        return res;
    } catch (error) {
        console.log("error",error)
    }
}

const getQuote=async(data)=>{
    try {
        console.log("data befor api =",data)
        const res=await instance.post("createTransportQuote",data)
        console.log("response==",res)
        return res;
    } catch (error) {
        console.log("error",error)
    }
}

export {requestCall,getQuote}