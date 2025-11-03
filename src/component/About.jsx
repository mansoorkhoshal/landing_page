import aboutImage from "../assets/15.jpg.jpeg";
import homeImage from "../assets/home.png.jpeg";

const About = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat max-w-7xl mx-auto"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <div className="flex flex-col md:flex-row items-center px-6 py-20 text-black">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-5xl md:text-6xl font-bold font-Garamond">
            The better way <br /> to buy real estate.
          </h3>
          <p className="text-lg leading-relaxed text-neutral-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its versions have
            evolved over layout.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch w-full max-w-2xl mx-auto my-4 px-4">
            <input
              type="text"
              placeholder="City, Address"
              className="flex-1 border-2 border-orange-500 pl-1 py-3 text-neutral-600 placeholder-neutral-500 focus:outline-none"
            />

            <button className="bg-orange-500 text-white font-semibold px-6 py-3 hover:bg-white hover:text-neutral-600 transition border-2 border-orange-500 mt-2 sm:mt-0">
              Search
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex lg:justify-end justify-center mb-8 md:mb-0">
          <img
            src={homeImage}
            alt="About"
            className="rounded-2xl shadow-lg w-80 md:w-96 hover:scale-105 transition-transform duration-300 rounded-tl-none rounded-tr-none rounded-bl-4xl rounded-br-none"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
