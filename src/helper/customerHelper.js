import instance from './axios'

const requestCall=async(data)=>{
    try {
        const res=await instance.post("createRequestCall",data)
        return res;
    } catch (error) {
        console.log("error",error)
    }
}

export {requestCall}