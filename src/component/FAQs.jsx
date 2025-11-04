import backImage from "../assets/backimage.jpeg";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { SiGitconnected } from "react-icons/si";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const FAQs = () => {
  const cardDetails = [
    {
      icon: <TfiHeadphoneAlt className="text-orange-500 text-4xl" />,
      heading: "CALL US",
      fullAdd: (
        <a
          href="https://wa.me/923234466448"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition"
        >
          (092) 323 4466448
        </a>
      ),
    },
    {
      icon: <SiGitconnected className="text-orange-500 text-4xl" />,
      heading: "WEBSITE",
      fullAdd: (
        <a
          href="https://www.mansoorkhoshal.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition"
        >
          www.mansoorkhoshal.com
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt className="text-orange-500 text-4xl" />,
      heading: "ADDRESS",
      fullAdd: (
        <a
          href="https://www.google.com/maps/place/Lahore,+Pakistan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition"
        >
          Lahore, Pakistan
        </a>
      ),
    },
    {
      icon: <FaEnvelope className="text-orange-500 text-4xl" />,
      heading: "EMAIL",
      fullAdd: (
        <a
          href="mailto:mansoorahmad.dev44@gmail.com"
          className="text-gray-700 hover:text-orange-500 transition"
        >
          mansoorahmad.dev44@gmail.com
        </a>
      ),
    },
  ];

  return (
    <section>
      <div
        className="relative bg-cover bg-center bg-no-repeat py-16 px-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto rounded-xl shadow-md"
        style={{
          backgroundImage: `url(${backImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-Garamond">
            Request a Free Consultation!!
          </h2>
        </div>

        <div className="relative z-10 mt-6 md:mt-0">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300">
            Reserve A Slot
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="my-15 flex flex-col md:flex-row items-center px-8 py-20 text-neutral-600">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-Garamond">
              — Any Questions? Reach Us
            </h3>
            <p className="text-lg leading-relaxed text-neutral-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout
              versions.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pb-20 max-w-7xl px-6">
            {cardDetails.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-tl-none rounded-tr-none rounded-bl-4xl rounded-br-none px-15 py-8 text-center"
              >
                <div className="flex flex-col items-center space-y-3 font-Garamond">
                  <span className="p-4 rounded-full">{item.icon}</span>
                  <h1 className="text-xl font-bold text-gray-800">
                    {item.heading}
                  </h1>
                  <p className="text-lg text-gray-600 hover:text-orange-500 duration-500 cursor-pointer">
                    {item.fullAdd}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
