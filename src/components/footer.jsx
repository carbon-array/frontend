// Footer Component
import Logo from "../assets/CarbonArray-Nav.png";
const footer = () => {
    return (
      <footer className="bg-white p-6 mt-12 border-t">
        <div className="max-w-5xl mx-auto flex justify-between items-start text-sm text-black">
          
          {/* Left Section */}
          <div>
            <div className="flex items-center space-x-2">
                <img src={Logo} alt="CarbonArray Logo" className="h-15 w-auto" />
            </div>
            <p className="mt-4 text-xs text-gray-500">© 2025 Carbon Array, Inc. All rights reserved.</p>
          </div>
  
          {/* Right Sections */}
          <div className="flex gap-12">
            <div>
              <h3 className="font-semibold mb-2">Social</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:opacity-70">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-70">Email</a></li>
                <li><a href="#" className="hover:opacity-70">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:opacity-70">Support</a></li>
                <li><a href="#" className="hover:opacity-70">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:opacity-70">Terms of Service</a></li>
                <li><a href="#" className="hover:opacity-70">Privacy Policy</a></li>
                <li><a href="#" className="hover:opacity-70">Subprocessors</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default footer;
  