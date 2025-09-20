import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [selectedRole, setSetselectedRole] = useState("");
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSetselectedRole(role);
    if (role === "customer") {
      navigate("/allservices");
    } else if (role === "serviceProvider") {
      navigate("/serviceproviderlogin");
    }
  };
  return (
    <div className=" flex w-full justify-center items-center mt-10">
      <div className=" bg-[#FFFBEE] p-10 rounded-xl">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-center">Choose Your Role</h1>
        <p className="text-gray-600">
          Are you looking for services or offering them?
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 mt-10">
        <button onClick={() => handleRoleSelection("customer")}>
          I am a customer
        </button>
        <button
          onClick={() => handleRoleSelection("serviceProvider")}
          className="bg-[#ff8901] rounded-3xl px-6 py-2"
        >
          I am a service provider
        </button>
      </div>
      </div>
    </div>
  );
};
export default Login;
