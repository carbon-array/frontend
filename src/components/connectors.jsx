import Logo from "../assets/picacity (1).png";
import Logo1 from "../assets/uoft.png";
import Logo2 from "../assets/hatchery (1).png"; 
import Logo3 from "../assets/soren-removebg-preview.png";
import Logo4 from "../assets/airmo.png";

export default function Connectors() {
  const connectors = [
    {name: "Airmo", icon: Logo4, size: "h-16 w-auto", link: "https://www.airmo.io/"},
    { name: "UofT", icon: Logo1, size: "h-19 w-auto", link: "https://www.utoronto.ca/" },
    { name: "Hatchery", icon: Logo2, size: "h-16 w-full object-contain", link: "https://hatchery.engineering.utoronto.ca/" },
    { name: "Soren", icon: Logo3, size: "h-16 w-auto", link: "https://www.sorenhydrogen.com/" } // Update link if available
  ];

  return (
    <div className="w-full py-16 bg-white text-center">
      <h2 className="text-4xl font-bold">Our Clients & Collaborations</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mt-2">
        Engage with pioneers in sustainability who are transforming our world with innovative solutions. Collaborate with our team of experts to make a lasting impact on the environment.
      </p>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          
          {/* Render Connector Logos with Links */}
          {connectors.map((connector) => (
            <a
              key={connector.name}
              href={connector.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <img src={connector.icon} alt={connector.name} className={`${connector.size}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
