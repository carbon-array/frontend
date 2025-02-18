import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Hero from "./components/hero.jsx";
import Connectors from "./components/connectors.jsx";
import Text from "./components/text.jsx";
import FAQ from "./components/faqs.jsx";
import Login from "./components/login.jsx"; // Import the Login page
import Signup from "./components/signup.jsx"; // Import the Signup page

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
    <Router>
      <div className="min-h-screen bg-white text-black">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <br />
                <br />
                <br />
                <br />
                <Hero />
                <br />
                <br />
                <Text />
                <Connectors />
                <FAQ />
              </>
            }
          />
          {/* Login Page */}
          <Route path="/login" element={<Login />} />
          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
