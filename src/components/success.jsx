import { useNavigate } from "react-router-dom";

const Success=()=>{
    const handleSubmit=()=>{
        navigate("/allservices");
       
    }
    const navigate=useNavigate();
    return(
        <div className="m-8 flex flex-col justify-center items-center ">
        <h1 className=" text-center text-4xl font-semibold">Welcome to UnlockDiscounts!</h1>
        <p className="text-gray-600 text-center">Your account has been created. You can now start offering services</p>
        <button type="submit" onClick={handleSubmit} className="mt-8 text-sm text-black font-light text-center bg-[#ff8901] rounded-xl p-2">Get Started</button>
        </div>
    );
}

export default Success;