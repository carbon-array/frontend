import Logo1 from "../assets/uoft.png";
import Logo2 from "../assets/hatchery.png";
import Logo3 from "../assets/soren-removebg-preview.png";
import Logo4 from "../assets/airmo.png";

export default function Connectors() {
  const connectors = [
    { name: "UofT", icon: Logo1, link: "https://www.utoronto.ca/" },
    { name: "Hatchery", icon: Logo2, link: "https://hatchery.engineering.utoronto.ca/" },
    { name: "Soren", icon: Logo3, link: "https://www.sorenhydrogen.com/" },
    { name: "Airmo", icon: Logo4, link: "https://www.airmo.io/" },
  ];

  return (
    <div className="w-full py-16 bg-white text-center">
      <h2 className="text-4xl font-bold">Our Clients & Collaborations</h2>
      <p className="text-gray-500 max-w-2xl mx-auto mt-2">
        Engage with pioneers in sustainability who are transforming our world with innovative solutions. Collaborate with our team of experts to make a lasting impact on the environment.
      </p>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {connectors.map((connector) => (
            <a
              key={connector.name}
              href={connector.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-40 bg-gray-100 p-4 rounded-lg shadow-md flex items-center justify-center transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <img src={connector.icon} alt={`Logo of ${connector.name}`} className="max-h-[80%] max-w-[80%] object-contain" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
