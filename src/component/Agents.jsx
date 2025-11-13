import agent1 from "../assets/agent01.jpeg";
import agent2 from "../assets/agent02.jpeg";
import agent3 from "../assets/agent03.jpeg";
import agent4 from "../assets/agent04.jpeg";
import { FaLinkedinIn, FaGithub, FaDiscord, FaReddit } from "react-icons/fa";

const Agents = () => {
  const socialLinks = [
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaGithub />, link: "#" },
    { icon: <FaDiscord />, link: "#" },
    { icon: <FaReddit />, link: "#" },
  ];

  const agentsDetails = [
    {
      agentImg: agent1,
      alt: "Agent 1",
      name: "Joseph Doe",
      properties: "18 Properties",
      accounts: socialLinks,
    },
    {
      agentImg: agent2,
      alt: "Agent 2",
      name: "Maria Wade",
      properties: "15 Properties",
      accounts: socialLinks,
    },
    {
      agentImg: agent3,
      alt: "Agent 3",
      name: "David Mach",
      properties: "10 Properties",
      accounts: socialLinks,
    },
    {
      agentImg: agent4,
      alt: "Agent 4",
      name: "Jeniffer Doe",
      properties: "12 Properties",
      accounts: socialLinks,
    },
  ];

  return (
    <section className="bg-neutral-900" id="agents">
      <div className="max-w-7xl mx-auto px-6 py-20 text-neutral-300 scroll-mt-20">
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold font-Garamond">
            — Our Perfect Agents
          </h3>
          <p className="text-lg text-neutral-400">
            Trusted local agents to guide you through every step.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8 max-w-7xl mx-auto">
        {agentsDetails.map((item, index) => (
          <div
            key={index}
            className="bg-neutral-800 rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-shadow shadow-lg hover:shadow-2xl"
          >
            <img
              src={item.agentImg}
              alt={item.alt}
              className="w-full h-80 object-cover"
            />
            <div className="p-4 text-neutral-200 space-y-1">
              <h4 className="text-2xl">{item.name}</h4>
              <h5 className="text-sm text-neutral-400">{item.properties}</h5>
              <div className="flex gap-3 mt-3">
                {item.accounts.map((acc, i) => (
                  <a
                    key={i}
                    href={acc.link}
                    className="p-2 rounded-md bg-white/5 hover:bg-orange-500 hover:text-white transition"
                  >
                    {acc.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agents;
