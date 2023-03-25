import instance from "./axios"

const login=async(data)=>{
    try {
        const result=await instance.post("adminLogin",data);
        return result;
    } catch (error) {
        console.log("error",error)
    }
}

export {login}