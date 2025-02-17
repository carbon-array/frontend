export default function Connectors() {
    const connectors = [
      { name: "Hatchery", icon: "/hatchery-1.png" },
      { name: "UofT", icon: "/uoft.png" },
      { name: "Picacity", icon: "/picacity-1.png" },
    ];
  
    return (
      <div className="w-full py-16 bg-white text-center">
        <h2 className="text-4xl font-bold">Connectors</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id veritatis omnis delectus dicta, sequi quis deserunt rem explicabo? Illo nesciunt molestiae saepe hic culpa sed qui omnis cum fuga ducimus!
        </p>
  
        <div className="flex justify-center mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {connectors.map((connector) => (
              <div
                key={connector.name}
                className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center"
              >
                <img src={connector.icon} alt={connector.name} className="w-12 h-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  