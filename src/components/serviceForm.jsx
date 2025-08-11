import {
  Building,
  CircleDollarSign,
  CircleDollarSignIcon,
  ImageUp,
  List,
  MailOpen,
  MapPinHouse,
  Phone,
  ShieldCheck,
  SquareUser,
  Tags,
} from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";



const Form = () => {
  const [isChecked, setIsChecked] = useState(false);
  const ref = useRef(null);
  const navigate=useNavigate();
  const [buisnessname,setBusinessname]=useState("");
  const [ownername,setOwnername]=useState("");
  const [phone,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [address,setAddress]=useState("");
  const [serviceCategory,setServiceCateogry]=useState("");
  const [subCategory,setSubCategory]=useState("");
  const [serviceOffered,setserviceOffered]=useState("");
  const [pricing,setpricing]=useState("");
  const [emergencycontact,setemergencycontact]=useState("");


  const [errors,setErrors]=useState({});
  const validate=()=>{
  const newErrors={};
  if(!buisnessname.trim()) newErrors.buisnessname("Business Name is required");
  if(!ownername.trim()) newErrors.ownername("Owner Name is required");
  if (!/^\d{10}$/.test(phone)) newErrors.phone("Enter valid phone number");
  if (!/\S+@\S+\.\S+/.test(email)) newErrors.email("Enter valid email");
  if (!address.trim()) newErrors.address("Address is required");
  if(!serviceCategory) newErrors.serviceCategory("Select category for service");
  if(!subCategory) newErrors.subCategory("Sub category is required");
  if(!serviceOffered.trim()) newErrors.serviceOffered("Enter service names separated by a comma");
  if(!pricing.trim()||isNaN(pricing)) newErrors.pricing("Enter valid Pricing");
  if (!/^\d{10}$/.test(emergencycontact)) newErrors.emergencycontact("Enter valid emergency contact number");

  return newErrors


  }

  const handleSubmit=(e)=>{
  e.preventDefault();

  const validationErrors=validate();
  if(Object.keys(validationErrors).length>0){
    setErrors=validationErrors;
    return;
  }
  console.log("Form submitted");
  alert("User registered successfully");
  navigate("/success")
}

  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-5xl mx-auto p-6 space-y-4  rounded-lg shadow">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Building className="text-[#ff8801] font-extrabold" />
          <h1 className="text-xl font-bold">Business or trade name*</h1>
        </div>
        <div>
          <input
            onChange={(e)=>setBusinessname(e.target.value)}
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
            onChange={(e)=>setOwnername(e.target.value)}
            placeholder="Enter your full name"
            className="w-full border border-gray-300 rounded-md p-4"
            required
          />
        </div>
      </div>
      <div className="flex justify-between items-center space-x-2 mb-4 ">
        <div className="w-[40%]">
          <div className="flex items-center space-x-2 mb-4">
            <Phone className="text-[#ff8901] font-extrabold " />
            <h1 className="text-xl font-bold">Phone number*</h1>
          </div>
          <div>
            <input
              type="tel"
              onChange={(e)=>setPhone(e.target.value)}
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
              onChange={(e)=>setEmail(e.target.value)}
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
            onChange={(e)=>setAddress(e.target.value)}
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
             onChange={(e)=>setServiceCateogry(e.target.value)}
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
            onChange={(e)=>setSubCategory(e.target.value)}
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
          <CircleDollarSignIcon className="text-[#ff8901] font-extrabold" />
          <h1 className="text-xl font-bold">
            List of services offered with pricing*
          </h1>
        </div>
        <div className="flex space-x-4 mb-4">
          <input
           onChange={(e)=>setserviceOffered(e.target.value)}
            type="text"
            placeholder="Service offered"
            className="w-[60%] p-4 border border-gray-400 rounded-md "
            required
          />
          <input
            type="text"
            onChange={(e)=>setpricing(e.target.value)}
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
          onChange={(e)=>setemergencycontact(e.target.value)}
            type="text"
            className="w-full p-4 border border-gray-400 rounded-md "
            required
          />
        </div>
      </div>
      <div className="flex flex-col items-center space-x-2 mb-4">
        <div>
      <input
        type="checkbox"
        checked={isChecked}
        className="accent-blue-500 w-5 h-5 rounded focus:ring-2 focus:ring-blue-300"
         onChange={(e) => setIsChecked(e.target.checked)}
      />{" "}
      <label className="text-gray-700">
        I agree to the terms and conditions and privacy policy.
      </label>
      </div>
      <button
        type="submit"
        className={`w-[20%] py-2 rounded-md ${
          isChecked
          ? "bg-[#ff8901] hover:bg-[#ff8910] text-black"
          : "bg-gray-400 text-gray-200 cursor-not-allowed"
        }`}
       

        disabled={!isChecked}
      >
        Register
      </button>
      </div>
    </form>
  );
};
export default Form;
