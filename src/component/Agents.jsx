import agent1 from "../assets/1.jpg.jpeg";
import agent2 from "../assets/2.jpg_2.jpeg";
import agent3 from "../assets/3.jpg.jpeg";
import agent4 from "../assets/4.jpg.jpeg";

const Agents = () => {
  const agentsDetails = [
    {
      agentImg: agent1,
      alt: "Agent 1",
      name: "Joseph Doe",
      properties: "18 Properties",
    },
    {
      agentImg: agent2,
      alt: "Agent 2",
      name: "Maria Wade",
      properties: "15 Properties",
    },
    {
      agentImg: agent3,
      alt: "Agent 3",
      name: "David Mach",
      properties: "10 Properties",
    },
    {
      agentImg: agent4,
      alt: "Agent 4",
      name: "Jeniffer Doe",
      properties: "12 Properties",
    },
  ];

  return (
    <section className="bg-neutral-800">
      <div className="bg-cover bg-center bg-no-repeat max-w-7xl mx-auto ">
        <div className=" flex flex-col md:flex-row items-center px-8 py-20 text-neutral-400">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-Garamond">
              — Our Perfact Agents
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-6 py-2 max-w-7xl mx-auto">
          {agentsDetails.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden mb-18"
            >
              <div className="relative">
                <img
                  src={item.agentImg}
                  alt={item.alt}
                  className="w-full h-80 object-cover rounded-tl-none rounded-tr-none rounded-bl-4xl rounded-br-none"
                />
              </div>
              <div className="p-3 text-neutral-300 space-y-1 font-Garamond">
                <h4 className="text-2xl">{item.name}</h4>
                <h5>{item.properties}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Agents;
