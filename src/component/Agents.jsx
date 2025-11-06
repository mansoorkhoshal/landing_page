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
    <section className="bg-neutral-800" id="agents">
      <div className="bg-cover bg-center bg-no-repeat max-w-7xl mx-auto ">
        <div className=" flex flex-col md:flex-row items-center px-8 py-20 text-neutral-400">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-Garamond">
              — Our Perfect Agents
            </h3>
            <p className="text-lg leading-relaxed text-neutral-400">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its versions have
              evolved over layout.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-8 max-w-7xl mx-auto">
          {agentsDetails.map((item, index) => (
            <div key={index} className="overflow-hidden mb-6">
              <div className="relative">
                <img
                  src={item.agentImg}
                  alt={item.alt}
                  className="w-full h-80 object-cover rounded-tl-none rounded-tr-none rounded-bl-4xl rounded-br-none"
                />
              </div>

              <div className="p-4 text-neutral-300 space-y-1 font-Garamond">
                <h4 className="text-2xl">{item.name}</h4>
                <h5 className="text-sm text-gray-400">{item.properties}</h5>

                <div className="flex space-x-3 mt-3">
                  {item.accounts.map((acc, i) => (
                    <a
                      key={i}
                      href={acc.link}
                      className="text-xl hover:text-orange-500"
                    >
                      {acc.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
