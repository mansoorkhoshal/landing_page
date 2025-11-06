import { FaUserTie } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TbHandFinger } from "react-icons/tb";

const ContactUs = () => {
  const cardDetails = [
    {
      icon: <FaSearch className="text-white text-3xl" />,
      heading: "Search Property from Anywhere",
      subDetails:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor.",
    },
    {
      icon: <FaUserTie className="text-white text-3xl" />,
      heading: "Professional & Friendly Agents",
      subDetails:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor.",
    },
    {
      icon: <TbHandFinger className="text-white text-3xl" />,
      heading: "Buy and Sell Awsome Property",
      subDetails:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="">
        <div className="my-15 flex flex-col md:flex-row items-center px-8 py-20 text-neutral-600">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-Garamond">
              — Why Choose Us?
            </h3>
            <p className="text-lg leading-relaxed text-neutral-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its versions have
              evolved over layout.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-9 px-6 pb-20 max-w-7xl mx-auto">
          {cardDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg overflow-visible rounded-tl-none rounded-tr-none rounded-bl-4xl rounded-br-none"
            >
              <div className="relative">
                <span className="absolute left-3 top-0 -translate-y-1/2 transform z-10 flex items-center justify-center bg-orange-500 px-4 py-3.5 rounded-bl-4xl">
                  {item.icon}
                </span>
              </div>

              <div className="p-5 pb-8 text-neutral-700 space-y-2 font-Garamond">
                <h1 className="mt-5 text-3xl font-bold">{item.heading}</h1>
                <p className="text-xl text-gray-500">{item.subDetails}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
