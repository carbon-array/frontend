import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero.jsx";
import Connectors from "./components/connectors.jsx";
import Text from "./components/text.jsx"; 
import FAQ from "./components/faqs.jsx";

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
      <Text/>

      <Connectors/>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
