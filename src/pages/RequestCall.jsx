import React, { useState } from "react";
import { toast } from "react-toastify";
import van from "../assets/images/futtavan.png";
import { requestCall } from "../helper/customerHelper";
import { CgSpinner } from "react-icons/cg";
const RequestCall = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    requestCall(data)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Request call created !");
          setData({ name: "", email: "", phone_number: "", message: "" });
          setError("")
        } else if (res.status === 202) {
          setError(res.data.error);
        }
      })
      .catch((error) => {
        toast.error("something went wrong !");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="h-fit w-full px-5 sm:px-10 py-5">
      <p className="capitalize text-5xl sm:text-6xl font-bold text-orange-400">
        Request a call for you
      </p>
      <div className="flex  w-full justify-center pt-10">
        <form
          onSubmit={handleSubmit}
          className="w-full sm:full md:w-2/5 flex flex-col gap-3"
        >
          <div className="">
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Name"
              className=" rounded-md text-xl w-full border border-orange-500 outline-none pl-5 h-10 sm:h-14 pb-0 mb-0"
            />
            <div className=" text-red-500 pl-3 h-3 text-xs w-fit">
              {error?.name}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email"
              className=" rounded-md text-xl w-full border border-orange-500 outline-none pl-5 h-10 sm:h-14"
            />
            <div className=" text-red-500 pl-3 h-3 text-xs w-fit">
              {error?.email}
            </div>
          </div>
          <div>
            <input
              type="text"
              name="phone_number"
              value={data.phone_number}
              onChange={handleChange}
              placeholder="Phone Number"
              className=" rounded-md text-xl w-full border border-orange-500 outline-none pl-5 h-10 sm:h-14"
            />
            <div className=" text-red-500 pl-3 h-3 text-xs w-fit">
              {error?.phone_number}
            </div>
          </div>
          <div>
            <textarea
              rows="5"
              name="message"
              value={data.message}
              onChange={handleChange}
              placeholder="Message"
              className=" resize-none rounded-md text-xl w-full border border-orange-500 outline-none pl-5 pt-3"
            />
            <div className=" text-red-500 pl-3 h-3 text-xs w-fit">
              {error?.message}
            </div>
          </div>
          <button
            disabled={isLoading}
            type="submit"
            className="rounded-full text-white text-lg font-semibold bg-orange-500 w-32  mx-auto py-3 flex gap-2 justify-center items-center disabled:bg-gray-400"
          >
            {isLoading && <CgSpinner size={24} className="animate-spin " />}
            SEND
          </button>
        </form>
        <img
          className="hidden sm:hidden md:block w-3/5 object-contain pl-5"
        />
      </div>
    </div>
  );
};

export default RequestCall;
