import { useNavigate } from "react-router-dom";
import Logo from "../assets/CarbonArray-Nav.png"; // Adjust path if needed

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* Logo at the top (Clickable) */}
        <div className="flex justify-center mb-4">
          <button onClick={() => navigate("/")}>
            <img src={Logo} alt="CarbonArray Logo" className="h-12 w-auto" />
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-black text-white py-2 rounded">
            Login
          </button>
        </form>

        {/* Sign-up Option */}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <button 
            onClick={() => navigate("/signup")}
            className="text-blue-600 hover:underline"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
