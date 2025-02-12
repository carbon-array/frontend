import { useEffect } from "react";
import { useState } from "react";

export default function Navbar() {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "l") {
        event.preventDefault();
        alert("Login button clicked"); // Replace with actual login function
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center font-sans">
        {/* Logo */}
        <div className="text-black text-2xl font-semibold tracking-[0.2em] flex items-center">
          CarbonArray
        </div>
        
        
        {/* Navigation Links */}
        <ul className="flex gap-6 text-black text-sm font-medium">
          <li><a href="#" className="hover:text-gray-600">Support</a></li>
          <li><a href="#" className="hover:text-gray-600">Blog</a></li>
        </ul>
        
        {/* Login Button */}
        <button 
          className="bg-black text-white px-5 py-2 rounded-lg hover:opacity-80 flex items-center gap-2"
          onClick={() => alert("Login button clicked")}
        >
          Login <span className="ml-1 rounded border border-gray-600 px-1 font-mono">L</span>
        </button>
      </div>
    </nav>
  );
}