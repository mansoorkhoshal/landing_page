import testominal1 from "../assets/1.jpg_1.jpeg";
import testominal2 from "../assets/2.jpg.jpeg";
import testominal3 from "../assets/3.jpg.jpeg";

const Testominals = () => {
  const testominalDetails = [
    {
      testominalImage: testominal1,
      alt: "Testominal One",
      subDetails:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor.",
      profission: "Front End Developer",
    },
    {
      testominalImage: testominal2,
      alt: "Testominal Two",
      subDetails:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor.",
      profission: ".NET Engineer",
    },
    {
      testominalImage: testominal3,
      alt: "Testominal Three",
      subDetails:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor.",
      profission: "Full Stack Developer",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      <div className="items-center px-8 py-15 text-neutral-600">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold font-Garamond mb-30">
            — Our Client Reviews
          </h3>
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-9 pb-20 max-w-7xl mx-auto">
            {testominalDetails.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg  rounded-tl-none rounded-tr-none rounded-bl-4xl rounded-br-none"
              >
                <div className="p-15 text-neutral-700 space-y-2 font-Garamond italic">
                  <img
                    src={item.testominalImage}
                    alt={item.alt}
                    className="w-35 h-35 rounded-full object-cover mx-auto mb-9"
                  />
                  <p className="text-xl text-gray-500">{item.subDetails}</p>
                  <p className="text-xl text-gray-500">{item.profission}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testominals;
