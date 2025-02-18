import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/CarbonArray-Nav.png";
import Logo2 from "../assets/google.png"; // Corrected path
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import eye icons

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-20"> {/* Added margin-top here */}
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* Logo at the top (Clickable) */}
        <div className="flex justify-center mb-4">
          <button onClick={() => navigate("/")}>
            <img src={Logo} alt="CarbonArray Logo" className="h-12 w-auto" />
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-gray-700">Password</label>
            <input
              type={passwordVisible ? "text" : "password"}
              className="w-full p-2 border rounded mt-1"
              placeholder="Create a password"
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-9 cursor-pointer"
            >
              {passwordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </span>
          </div>

          <button className="w-full bg-black text-white py-2 rounded">
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Signup Button - Fixed Image Path */}
        <button className="w-full border py-2 rounded flex items-center justify-center gap-2 hover:bg-gray-200">
          <img src={Logo2} alt="Google Logo" className="h-5 w-5" />
          Sign Up with Google
        </button>

        {/* Login Option */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
