import { Building, CardSim, ImageUp, List, MapPinHouse, Phone, ShieldCheck, SquareUser, Tags } from "lucide-react";

const Form = () => {
  return (
    <form className="w-full  space-y-4">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Building className="text-yellow-500 font-extrabold" />
          <h1 className="text-xl font-bold">Building or trade name*</h1>
        </div>
        <div>
          <input
            type="text"
            className="w-full border  border-gray-500 rounded-md p-4 "
            required
          />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <SquareUser className="text-yellow-500 font-extrabold " />
          <h1 className="text-xl font-bold">Owners full name*</h1>
        </div>
        <div>
          <input
            type="text"
            className="w-full border border-gray-400 rounded-md p-4"
            required
          />
        </div>
      </div>
      <div className="flex justify-between items-center space-x-2 mb-4">
        <div >
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="text-yellow-500 font-extrabold fill-yellow-500" />
            <h1 className="text-xl font-bold">Phone number*</h1>
          </div>
          <div>
            <input
              type="tel"
              className="w-full p-4 border border-gray-400 rounded-md "
              required
            />
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Building className="text-yellow-500 font-extrabold " />
            <h1 className="text-xl font-bold">Email address*</h1>
          </div>
          <div>
            <input
              type="email"
              className="w-full p-4 border border-gray-300 rounded-md "
              required
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <MapPinHouse className="text-yellow-500 font-extrabold" />
          <h1 className="text-xl font-bold">Registered Business Address*</h1>
        </div>
        <div>
          <textarea
            type=""
            className="w-full p-4 border border-gray-300 rounded-md "
            required
          />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <MapPinHouse className="text-yellow-500 font-extrabold" />
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
        <div >
          <div className="flex items-center space-x-2 mb-4">
            <Tags className="text-yellow-500 font-extrabold" />
            <h1 className="text-xl font-bold">Service Category*</h1>
          </div>
          <div>
            <input
              type=""
              className="w-full p-4 border border-gray-300 rounded-md "
              required
            />
          </div>
        </div>
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <List className="text-yellow-500 font-extrabold" />
            <h1 className="text-xl font-bold">Sub category*</h1>
          </div>
          <div>
            <input
              type="text"
              className="w-full p-4 border border-gray-300 rounded-md "
              required
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <CardSim className="text-yellow-500 font-extrabold" />
          <h1 className="text-xl font-bold">List of services offered with prizing*</h1>
        </div>
        <div>
          <input
            type="text"
            className="w-full p-4 border border-gray-400 rounded-md "
            required
          />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <ImageUp className="text-yellow-500 font-extrabold" />
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
          <ShieldCheck className="text-yellow-500 font-extrabold" />
          <h1 className="text-xl font-bold">Experience Certificates/ Client References*</h1>
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
          <Phone className="text-yellow-500 font-extrabold  fill-yellow-500" />
          <h1 className="text-xl font-bold">Emergency Contact Number*</h1>
        </div>
        <div>
          <input
            type="text"
            className="w-full p-4 border border-gray-400 rounded-md "
            required
          />
        </div>
      </div>

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
