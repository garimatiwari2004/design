import { useNavigate } from "react-router-dom";
import imgcollage from "../assets/imgcollage.png";
import "../index.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login"); // or your actual login route
  };

  return (
    <div className="pt-10  heroclass w-full min-h-screen">

      <div className="flex w-full justify-center gap-10 space-x-8  px-20 py-10 flex-wrap"> 
      <div className="flex flex-col  " >
        <div className="flex flex-col  space-y-4 ">
          <h1 className="text-8xl  text-gray-800 font-extrabold font-poppins tracking-wide opacity-90" style={{ textShadow: "3px 4px 4px rgba(128,128,128,0.8)" }}>One Platform</h1>
          <h1  className="text-8xl  text-gray-800 font-extrabold font-poppins tracking-wide opacity-90 " style={{ textShadow: "3px 4px 4px rgba(128,128,128,0.8)" }}>All Services</h1>
        </div>
        <div>
          <p className="text-gray-600 text-semibold mt-9 md:text-xl sm:text-md">
            Unlock trusted services with speed, savings, and simplicity.
          </p>
        </div>
        <div className="flex gap-5 mt-10">
          <button className="bg-[#FF9800] md:px-8 md:py-2 sm:p-2 rounded-3xl md:text-2xl sm:lg  font-semibold hover:bg-white hover:border hover:border-[#FF8900] " onClick={handleClick}>Get Started</button>
          <button className=" border-[#FF9800] md:px-8 md:py-2 sm:p-2 rounded-3xl md:text-2xl sm:lg font-semibold hover:border hover:border-[#FF9800]">Explore Services</button>
        </div>

      </div>
      <div className="">
        <img src={imgcollage} alt="img-collage" className=""/>


      </div>
      </div>
    </div>
  );
};

export default Hero;
