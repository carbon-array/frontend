export default function Connectors() {
    const connectors = [
      { name: "Gmail", icon: "/icons/gmail.png" },
      { name: "Google Calendar", icon: "/icons/calendar.png" },
      { name: "Google Drive", icon: "/icons/drive.png" },
      { name: "Notion", icon: "/icons/notion.png" },
      { name: "Slack", icon: "/icons/slack.png" },
      { name: "Discord", icon: "/icons/discord.png" },
      { name: "Linear", icon: "/icons/linear.png" },
      { name: "GitHub", icon: "/icons/github.png" },
    ];
  
    return (
      <div className="w-full py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-black">Connectors</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-2">
          Butler integrates seamlessly with all of the apps you use every day.
          Teams can use our API to send their own siloed data to Butler.
        </p>
  
        <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto mt-10">
          {connectors.map((connector) => (
            <div key={connector.name} className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center">
              <img src={connector.icon} alt={connector.name} className="w-12 h-12" />
            </div>
          ))}
        </div>
      </div>
    );
  }
  