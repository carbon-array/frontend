import { FaCheckCircle, FaUserFriends, FaGlobe } from "react-icons/fa";  // Import FaGlobe

export default function WhyUs() {
  const uspList = [
    {
      title: "Distributed Ledger",
      description: "Our platform will generate a unique barcode for every newly listed carbon credit.",
      icon: <FaCheckCircle className="text-4xl mb-2" />
    },
    {
      title: "Peer to Peer Transactions",
      description: "Our exchange will allow customers to interact directly without any middlemen in between.",
      icon: <FaUserFriends className="text-4xl mb-2" />
    },
    {
      title: "Publicly Available",
      description: "We’re building a platform for transparent carbon credit trading with fair pricing for buyers and sellers.",
      icon: <FaGlobe className="text-4xl mb-2" />  // Replace with FaGlobe
    }
  ];

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Why Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {uspList.map((usp, index) => (
          <div key={index} className="p-6 flex flex-col items-center">
            {usp.icon}
            <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
            <p className="text-gray-600">{usp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
