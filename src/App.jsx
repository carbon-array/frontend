import { useEffect, useState } from "react";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero.jsx";
import Connectors from "./components/connectors.jsx"; // Import the Hero component

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
      <br />
      <br />
      <Hero /> {/* Render the Hero component here */}
      <br />
      <br />
      <br />
      <br />
      <h1 className="max-w-4xl mx-auto text-center pt-16  font-bold transition-colors duration-300" style={{ color: scrollY > 200 ? "black" : "gray" }}>
        Lor
      </h1>
      <Connectors/>
      <Footer />
    </div>
  );
}

export default App;
