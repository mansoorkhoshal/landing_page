import testimonail1 from "../assets/testimonials01.jpeg";
import testimonail2 from "../assets/testimonials02.jpeg";
import testimonail3 from "../assets/testimonials03.jpeg";

const Testimonials = () => {
  const testimonailDetails = [
    {
      testimonailImage: testimonail1,
      alt: "Testominal One",
      subDetails:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor.",
      profission: "Senior Developer",
    },
    {
      testimonailImage: testimonail2,
      alt: "Testominal Two",
      subDetails:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor.",
      profission: "CEO of Meta",
    },
    {
      testimonailImage: testimonail3,
      alt: "Testominal Three",
      subDetails:
        "Lorem ipsum dolor sit amet adipiscing elit sed orci dictum sagittis libero vitae auctor elit. Praesent accumsan mauris eget tortor.",
      profission: "Software Enigneer",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto" id="reviews">
      <div className="items-center px-8 py-15 text-neutral-600">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-3xl md:text-4xl font-bold font-Garamond mb-30">
            — Our Client Reviews
          </h3>
        </div>
        <div className="flex justify-center items-center text-center">
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 lg:gap-2 gap-9 pb-20 max-w-7xl mx-auto">
            {testimonailDetails.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg  rounded-tl-none rounded-tr-none rounded-bl-4xl rounded-br-none"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                  <img
                    src={item.testimonailImage}
                    alt={item.alt}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <p className="text-gray-600 italic mb-3">
                    “{item.subDetails}”
                  </p>
                  <p className="text-sm text-neutral-500">{item.profission}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
