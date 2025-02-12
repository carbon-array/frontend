
import Logo from '/Carbon-Array-Logo.svg';
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold text-center">Welcome to Butler AI Clone</h1>
        <p className="text-center text-gray-400 mt-2">
          AI-powered productivity assistant for modern workflows.
        </p>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
