import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
import "../index.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login"); // or your actual login route
  };

  return (
    <div className="relative w-full">
      <img
        src={hero}
        alt="Hero Background"
        className="object-contain w-full h-auto max-h-screen md:object-cover"
      />
      <button
        onClick={handleClick}
        href="/login"
        type="submit"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-yellow-500 px-4 py-2 rounded-2xl text-black font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg animate-bounce"
      >
        Get Started
      </button>
    </div>
  );
};

export default Hero;
