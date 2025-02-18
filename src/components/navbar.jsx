import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Logo from "../assets/CarbonArray-Nav.png"; // Adjust path if needed

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "L" || event.key === "U") {
        event.preventDefault();
        navigate("/login"); // Navigate to login when L or U is pressed
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [navigate]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 rounded-b-lg z-50
        ${scrollY > 50 ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center font-sans px-4 py-2">
        {/* Logo (Clickable) */}
        <button onClick={() => navigate("/")} className="flex items-center">
          <img src={Logo} alt="CarbonArray Logo" className="h-15 w-auto cursor-pointer" />
        </button>

        {/* Navigation Links and Buttons */}
        <div className="flex gap-6 ml-auto items-center">
          {/* Login Button */}
          <button 
            className="text-black px-5 py-2 rounded-lg hover:opacity-80 flex items-center gap-2"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          {/* Sign Up Button */}
          <button 
            className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80 flex items-center gap-2"
            onClick={() => navigate("/signup")} // Navigate to Signup page
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
