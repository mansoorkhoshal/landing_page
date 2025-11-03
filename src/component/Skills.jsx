import skillBack from "../assets/bordered-wave.png";
import companyLogo1 from "../assets/1.png";
import companyLogo2 from "../assets/2.png";
import companyLogo3 from "../assets/3.png";
import companyLogo4 from "../assets/4.png";
import companyLogo5 from "../assets/5.png";
import home1 from "../assets/01.jpg.jpeg";
import home2 from "../assets/02.jpg.jpeg";
import home3 from "../assets/03.jpg.jpeg";
import home4 from "../assets/04.jpg.jpeg";

const Skills = () => {
  const companyLogos = [
    { companyImg: companyLogo1, alt: "Company 1" },
    { companyImg: companyLogo2, alt: "Company 2" },
    { companyImg: companyLogo3, alt: "Company 3" },
    { companyImg: companyLogo4, alt: "Company 4" },
    { companyImg: companyLogo5, alt: "Company 5" },
  ];

  const homeImages = [
    {
      img: home1,
      address: "Financial Office, Romania",
      area: "1500 sqft | 03 beds | 05 baths",
      currentPrice: "$18000",
      retailsPrice: "$20000",
      alt: "Home 1",
    },
    {
      img: home2,
      address: "Tomin Villa, Denmark",
      area: "1500 sqft | 03 beds | 05 baths",
      currentPrice: "$15000",
      retailsPrice: "$14500",
      alt: "Home 2",
    },
    {
      img: home3,
      address: "Cruzz Villa, Spain",
      area: "1500 sqft | 03 beds | 05 baths",
      currentPrice: "$11000",
      retailsPrice: "$14500",
      alt: "Home 3",
    },
    {
      img: home4,
      address: "Milton Villa, NY",
      area: "1500 sqft | 03 beds | 05 baths",
      currentPrice: "$12000",
      retailsPrice: "$11500",
      alt: "Home 4",
    },
  ];

  return (
    <div>
      <div
        className="bg-cover bg-center bg-no-repeat max-w-7xl mx-auto"
        style={{ backgroundImage: `url(${skillBack})` }}
      >
        <div className="my-15 flex flex-col md:flex-row items-center px-8 py-20 text-neutral-600">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-Garamond">
              — Our Partners
            </h3>
            <p className="text-lg leading-relaxed text-neutral-600">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its versions have
              evolved over layout.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 md:divide-x divide-y md:divide-y-0  divide-gray-300">
          {companyLogos.map((item, index) => (
            <div key={index} className="px-4">
              <img
                src={item.companyImg}
                alt={item.alt}
                className="brightness invert hover:invert-0 sm:w-32 md:w-40 lg:w-38 xl:w-45 h-auto transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        <div className="my-15 flex flex-col md:flex-row items-center px-8 py-20 text-neutral-600">
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold font-Garamond">
              — Home For Sale
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 px-6 py-2 max-w-7xl mx-auto">
          {homeImages.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-orange-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  For Sale
                </span>
              </div>
              <div className="p-5 text-neutral-700 space-y-2">
                <h4 className="font-Garamond text-2xl">{item.address}</h4>
                <p className="text-sm text-gray-500">{item.area}</p>

                <div className="flex justify-between items-center mt-3">
                  <p className="text-orange-500 font-bold text-lg">
                    {item.currentPrice}
                  </p>
                  <p className="text-gray-400 line-through text-sm">
                    {item.retailsPrice}
                  </p>
                </div>

                <button className="mt-4 w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-white hover:text-orange-500 border-2 border-orange-500 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
