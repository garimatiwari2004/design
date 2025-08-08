import {
  Building,
  CardSim,
  ImageUp,
  List,
  MailOpen,
  MapPinHouse,
  Phone,
  ShieldCheck,
  SquareUser,
  Tags,
} from "lucide-react";
import { useRef } from "react";

const Form = () => {
  const ref = useRef(null);
  return (
    <form className="w-full max-w-5xl mx-auto p-6 space-y-4  rounded-lg shadow">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Building className="text-[#ff8801] font-extrabold" />
          <h1 className="text-xl font-bold">Business or trade name*</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your business name"
            className="w-full border  border-gray-300 rounded-md p-4 "
            required
          />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <SquareUser className="text-[#ff8901] font-extrabold " />
          <h1 className="text-xl font-bold">Owner's full name*</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md p-4"
            required
          />
        </div>
      </div>
      <div className="flex justify-between items-center space-x-2 mb-4 ">
        <div className="w-[40%]">
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="text-[#ff8901] font-extrabold fill-[#ff8901]" />
            <h1 className="text-xl font-bold">Phone number*</h1>
          </div>
          <div>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-4 border border-gray-300 rounded-md "
              required
            />
          </div>
        </div>
        <div className="w-[40%]">
          <div className="flex items-center space-x-2 mb-4">
            <MailOpen className="text-[#ff8901] font-extrabold " />
            <h1 className="text-xl font-bold">Email address*</h1>
          </div>
          <div>
            <input
              type="email"
              placeholder="your@gmail.com"
              className="w-full p-4 border border-gray-300 rounded-md "
              required
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <MapPinHouse className="text-[#ff8901] font-extrabold" />
          <h1 className="text-xl font-bold">Registered Business Address*</h1>
        </div>
        <div>
          <textarea
            type=""
            placeholder="Enter your business address"
            className="w-full p-4 border border-gray-300 rounded-md "
            required
          />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <MapPinHouse className="text-[#ff8901] font-extrabold" />
          <h1 className="text-xl font-bold">Upload address proof*</h1>
        </div>
        <div>
          <input
            type="file"
            className=" p-4  w-full border border-gray-300 rounded-md "
            placeholder="Click to upload"
            required
          />
        </div>
      </div>
      <div className="flex justify-between items-center space-x-2 mb-4">
        <div className=" w-[40%]">
          <div className="flex items-center space-x-2 mb-4">
            <Tags className="text-[#ff8901] font-extrabold" />
            <h1 className="text-xl font-bold">Service Category*</h1>
          </div>
          <div>
            <select
              ref={ref}
              className="w-full p-4 border border-gray-300 rounded-md "
              placeholder="Select a category"
            >
              <option value="" disabled>
                Select a category
              </option>

              <option value="a">A</option>
              <option value="b">B</option>
            </select>
          </div>
        </div>
        <div className="w-[40%]">
          <div className="flex items-center space-x-2 mb-4">
            <List className="text-[#ff8901] font-extrabold" />
            <h1 className="text-xl font-bold">Sub category*</h1>
          </div>
          <div>
            <select
              ref={ref}
              className="w-full p-4 border border-gray-300 rounded-md "
              
            >
              <option value="" disabled>
                Select a sub category
              </option>

              <option value="a">A</option>
              <option value="b">B</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <CardSim className="text-[#ff8901] font-extrabold" />
          <h1 className="text-xl font-bold">
            List of services offered with pricing*
          </h1>
        </div>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Service offered"
            className="w-[60%] p-4 border border-gray-400 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="Enter pricing"
            className="w-[40%] p-4 border border-gray-400 rounded-md "
            required
          />

        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <ImageUp className="text-[#ff8901] font-extrabold" />
          <h1 className="text-xl font-bold">Portfolio media upload*</h1>
        </div>
        <div>
          <input
            type="file"
            className="w-full p-4 border border-gray-400 rounded-md "
            required
          />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <ShieldCheck className="text-[#ff8901] font-extrabold" />
          <h1 className="text-xl font-bold">
            Experience Certificates/ Client References*
          </h1>
        </div>
        <div>
          <input
            type="file"
            className="w-full p-4 border border-gray-400 rounded-md "
            required
          />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Phone className="text-[#ff8901] font-extrabold " />
          <h1 className="text-xl font-bold">Emergency Contact Number*</h1>
        </div>
        <div>
          <input
          placeholder="Enter emergency contact number"
            type="text"
            className="w-full p-4 border border-gray-400 rounded-md "
            required
          />
        </div>
      </div>
      <input
        type="checkbox"
        className="accent-blue-500 w-5 h-5 rounded focus:ring-2 focus:ring-blue-300"
      />{" "}
      <label className="text-gray-700">
        I agree to the terms and conditions and privacy policy.
      </label>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
};
export default Form;
