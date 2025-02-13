import Logo2 from "../assets/hero-main.png"; // Adjust path if needed

export default function Hero() {
  return (
    <div className="w-full max-w-4xl mx-auto text-center pt-16">
      <h1 className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-5xl font-semibold text-black md:text-7xl">
        The one-stop shop for <br /> carbon-credit exchange
      </h1>

      <br />
      <br />
      <h2>
      CarbonArray optimizes the exchange process of carbon credits for a sustainable future. <br />Focus on trading, not complexities. 
      </h2>
      <br />
      <br />

      
      {/* Center align button */}
      <div className="flex justify-center">
        <button 
          className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80 flex items-center gap-2"
          onClick={() => alert("Login button clicked")}
        >
          Sign Up <span className="ml-1 rounded border border-gray-600 px-1 font-mono">L</span>
        </button>
      </div>

      <br />
      <br />
      <div className="relative">
        <img src={Logo2} alt="Logo" className="w-full h-auto rounded-lg" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
      </div>
    </div>
  );
}
