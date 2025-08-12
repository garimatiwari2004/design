import { Search } from "lucide-react";
import image from "../assets/image.png";
import popularserrvices from "../assets/popularserrvices.png"
import trendingservices from "../assets/trendingservices.png"
import topprofessionals from "../assets/topprofessionals.png"
import Vector from "../assets/Vector.png"
import star from "../assets/star.png"
import calendar from "../assets/calendar.png"

const AllServices = () => {
  return (
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

      <div className="m-6 w-full">
        <img src={popularserrvices} alt="" className=""/>
      </div>
      <div className="m-6 w-full">
        <img src={trendingservices} alt="" className="" />
      </div>
       <div className="m-6 w-full">
        <img src={topprofessionals} alt="" className="" />
      </div>
      <div>
      <div className="w-full">
        <h1 className="text-2xl font-semibold mb-4">Why choose UnlockDiscounts?</h1>
        <h1 className="text-4xl font-extrabold mb-3">We connect you with the best</h1>
        <p className="text-gray-400">Our platform makes it easy to find and hire reliable professionals for any task.</p>
      </div>
      </div>
      <div className="container mx-auto flex justify-between w-full gap-10 my-8"> 

        <div className=" space-y-4">
            <img src={Vector} alt="" />
            <h2 className="font-bold">Verified and Background-Checked pros</h2>
            <p className="text-gray-400"> We thoroughly vet all our pros to ensure they
                <br />
                meet our high standards
            </p>


        </div>
        <div className=" space-y-4">
            <img src={star} alt="" />
            <h2 className="font-bold">Top rated professionals</h2>
            <p className="text-gray-400"> Our pros consistently receive excellent 
                <br />
                reviews from satisfied customers.
            </p>


        </div>
        <div className=" space-y-4">
            <img src={calendar} alt="" />
            <h2 className="font-bold">Flexible Scheduling</h2>
            <p className="text-gray-400">Book appointments at your convenience, 
                <br />
                with flexible scheduling options.
            </p>


        </div>
      </div>

      <footer className="mt-40 mb-10 text-gray-400 flex justify-between ">
        <a className="hover:cursor-pointer hover:text-blue-700">Terms of service</a>
        <a className="hover:cursor-pointer hover:text-blue-700">Privacy Policy</a>
        <a className="hover:cursor-pointer hover:text-blue-700">Contact us</a>
      </footer>
    </div>
  );
};

export default AllServices;
