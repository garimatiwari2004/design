import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [selectedRole, setSetselectedRole] = useState("");
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSetselectedRole(role);
    if (role === "customer") {
      navigate("/customerlogin");
    } else if (role === "serviceProvider") {
      navigate("/serviceproviderlogin");
    }
  };
  return (
    <div className=" h-screen mt-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Choose Your Role</h1>
        <p className="text-gray-600">
          Are you looking for services or offering them
        </p>
      </div>

      <div className="flex flex-col items-center gap-10 mt-10">
        <button onClick={() => handleRoleSelection("customer")}>
          I am a customer
        </button>
        <button
          onClick={() => handleRoleSelection("serviceProvider")}
          className="bg-[#ff8901] rounded-3xl p-2"
        >
          I am a service provider
        </button>
      </div>
    </div>
  );
};
export default Login;
