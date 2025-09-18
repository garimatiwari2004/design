import { useNavigate } from "react-router-dom";
import vectorimg from "../assets/vectorimg.png";

const Success = () => {
  const handleSubmit = () => {
    navigate("/allservices");
  };
  const navigate = useNavigate();
  return (
    <div
      className=" flex items-center justify-center "
      style={{
        backgroundImage: `url(${vectorimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div className=" flex flex-col justify-center items-center bg-white w-1/2  m-auto p-5  rounded-lg shadow-lg ">
        <h1 className=" text-center text-3xl font-medium font-poppins mt-10">
          Your Verification is in progress
        </h1>
        <h1 className="text-center text-3xl font-medium font-poppins">
          You will receive an update within 24 hours
        </h1>
        <button
          type="submit"
          onClick={handleSubmit}
          className="mt-8 text-sm text-black font-semibold text-center bg-[#ff8901] rounded-xl p-2 mb-10"
        >
          Explore Services
        </button>
      </div>
    </div>
  );
};

export default Success;
