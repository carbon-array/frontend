import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/CarbonArray-Nav.png";

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

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
        navigate("/login");
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [navigate]);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl p-3 rounded-lg transition-all duration-300 z-50 backdrop-blur-md text-black ${
        scrollY > 50 ? "bg-white/70 shadow-lg" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center font-sans px-6 py-2">
        <button onClick={() => navigate("/")} className="flex items-center">
          <img src={Logo} alt="CarbonArray Logo" className="h-12 w-auto cursor-pointer" />
        </button>
        <div className="flex gap-4 ml-auto items-center">
          <button
            className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-80 flex items-center gap-2"
            onClick={() => navigate("/signup")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
