import { useEffect, useState } from "react";
import Logo from "../assets/CarbonArray-Nav.png"; // Adjust path if needed

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "L" || event.key === "l") {
        event.preventDefault();
        alert("Login button clicked");
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 ${scrollY > 50 ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center font-sans">
        {/* Logo with Image */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="CarbonArray Logo" className="h-15 w-auto" />
        </div>

        {/* Navigation Links and Sign Up Button */}
        <div className="flex gap-6 ml-auto items-center">
          <ul className=" text-black px-5 py-2 rounded-lg hover:opacity-80 flex items-center gap-2">
            <li><a href="#" className="hover:text-gray-600">Login</a></li>
          </ul>

          {/* Sign Up Button */}
          <button 
            className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80 flex items-center gap-2"
            onClick={() => alert("Login button clicked")}
          >
            Sign Up <span className="ml-1 rounded border border-gray-600 px-1 font-mono">S</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
