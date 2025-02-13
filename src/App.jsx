import Logo from '/Carbon-Array-Logo.svg';
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Logo2 from "./assets/hero-main.png"; 

import { useEffect, useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
        <Navbar />
      <br />
      <br />
      <div className="w-full max-w-4xl mx-auto text-center pt-16">
        <h1 className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-5xl font-semibold text-black md:text-7xl">
          The one-stop shop for <br /> carbon-credit exchange
        </h1>
        <br />
        <br />
        <br />
        <div className="relative">
          <img src={Logo2} alt="Logo" className="w-full h-auto rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
        </div>

      <h1 className="text-3xl font-bold transition-colors duration-300" style={{ color: scrollY > 200 ? "black" : "gray" }}>
        
        </h1>
        <Footer />
      </div>
    </div>
  );
}

export default App;
