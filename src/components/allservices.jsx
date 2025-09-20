import { Search } from "lucide-react";
import image from "../assets/image.png";
import Painter from "../assets/Painter.png";
import Plumber from "../assets/Plumber.png";
import Electrician from "../assets/Electrician.png";
import Beautician from "../assets/Beautician.png";
import Highlight from "../assets/Highlight 1.png";
import Hightlight2 from "../assets/Highlight 2.png";
import Hightlight3 from "../assets/Highlight 3.png";
import star_shine from "../assets/star_shine.png";

import trp1 from "../assets/TRP 1.png";
import trp2 from "../assets/TRP 2.png";
import trp3 from "../assets/TRP 3.png";


import topprofessionals from "../assets/topprofessionals.png"
import Vector from "../assets/Vector.png"
import star from "../assets/star.png"
import calendar from "../assets/calendar.png"

const AllServices = () => {
  return (
    <>
    <div className="container mx-auto my-2  ">
      <div className="relative">
     
        <img src={image} alt="heroimg" className="w-full h-auto" />

      
        <div className="absolute inset-x-0 top-[40%] mb-1 text-center px-4">
          <h1 className="text-gray-200 font-bold 
                         text-2xl sm:text-3xl md:text-4xl 
                         tracking-wide font-serif mb-4">
            All Services. One Platform
          </h1>
        </div>

     
        <div className="absolute inset-x-0 top-1/2 px-4">
          <div className="max-w-lg mx-auto flex items-center bg-gray-200 rounded-3xl px-3 py-1 sm:py-3">
            
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />

          
            <input
              type="text"
              placeholder="Search for services"
              className="flex-grow bg-gray-200 border-none focus:outline-none px-3 text-sm sm:text-base"
            />

            {/* Button */}
            <button className="bg-[#ff8901] px-3 sm:px-4 py-1 sm:py-2 rounded-2xl text-sm sm:text-base font-semibold text-black">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="px-4  w-full flex flex-col justify-between gap-4 space-y-6">
        <div className="mt-6">
        <h1 className="text-xl font-bold">Popular Services</h1>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-2 w-full">
          <div>
        <img src={Painter} alt="" />
        </div>
        <div>
        <img src={Plumber} alt="" />
        </div>
        <div>
        <img src={Electrician} alt="" />
        </div>
        <div>
        <img src={Beautician} alt="" />
        </div>
        </div>
      </div>
      <div className="px-4  w-full flex flex-col justify-between gap-4 space-y-6">
        <div className="mt-6">
          <h1 className="text-xl font-bold">Trending services</h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 w-full">
          <div>
            <img src={Highlight} alt="" />
          </div>
          <div>
            <img src={Hightlight2} alt="" />
          </div>
          <div>
            <img src={Hightlight3} alt="" />
          </div>
        </div>
      </div>
       <div className="px-4  w-full flex flex-col justify-between gap-4 space-y-6">
        <div className="mt-6">
          <h1 className="text-xl font-bold">Top Rated Professionals</h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-2 w-full">
          <div>
            <img src={trp1} alt="" />
          </div>
          <div>
            <img src={trp2} alt="" />
          </div>
          <div>
            <img src={trp3} alt="" />
          </div>
        </div>
      </div>
      <div>
      <div className="w-full mt-10 p-6">
        <h1 className="text-2xl font-bold mb-4">Why choose UnlockDiscounts?</h1>
       </div>
      </div>
      <div className="p-6 grid  sm:grid-cols-1 md:grid-cols-3 justify-between w-full gap-10 my-8 place-content-center items-center place-items-center"> 

        <div className=" space-y-4  p-5">
            <img src={Vector} alt="" />
            <h2 className="font-bold">Verified and Background-Checked pros</h2>
            <p className="text-gray-400"> We thoroughly vet all our pros to ensure they
                <br />
                meet our high standards
            </p>


        </div>
        <div className=" space-y-4  p-5">
            <img src={star_shine} alt="" />
            <h2 className="font-bold">Top rated professionals</h2>
            <p className="text-gray-400"> Our pros consistently receive excellent 
                <br />
                reviews from satisfied customers.
            </p>


        </div>
        <div className=" space-y-4  p-5">
            <img src={calendar} alt="" />
            <h2 className="font-bold">Flexible Scheduling</h2>
            <p className="text-gray-400">Book appointments at your convenience, 
                <br />
                with flexible scheduling options.
            </p>


        </div>
      </div>
       </div>

      <footer className=" p-10 mt-40  text-gray-400 flex justify-between bg-[#F2E7E7] w-full ">
        <a className="hover:cursor-pointer hover:text-blue-700">Terms of service</a>
        <a className="hover:cursor-pointer hover:text-blue-700">Privacy Policy</a>
        <a className="hover:cursor-pointer hover:text-blue-700">Contact us</a>
      </footer>
      </>
   
  );
};

export default AllServices;
