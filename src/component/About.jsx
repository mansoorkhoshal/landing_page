import homeImage from "../../public/homeImgInAbout.jpeg";

const About = () => {
  return (
    <section
      id="home"
      className="scroll-mt-20 bg-cover bg-center bg-no-repeat max-w-7xl mx-auto"
    >
      <div className="bg-white/70 backdrop-blur-sm rounded-xl mx-4 md:mx-0 flex flex-col-reverse md:flex-row items-center px-6 py-12 md:py-20 text-neutral-800">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h3 className="text-3xl md:text-5xl font-bold font-Garamond leading-tight">
            The better way <br /> to buy real estate.
          </h3>
          <p className="text-base md:text-lg text-neutral-600">
            Smart listings, trusted agents, and a simple search — find your
            perfect home faster.
          </p>

          <div className="w-full max-w-2xl my-4 mx-auto">
            <form className="flex items-center bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 min-w-0">
              <input
                type="text"
                aria-label="City or address"
                placeholder="City, Address"
                className="flex-1 px-3 py-5 text-neutral-700 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-300 transition min-w-0"
              />

              <button
                type="submit"
                className="shrink-0 bg-orange-500 text-white font-semibold px-6 py-5 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-300 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-6 md:mb-0">
          <div className="w-80 md:w-96 max-w-full overflow-hidden rounded-2xl shadow-2xl">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <img
                src={homeImage}
                alt="About home"
                className="w-full h-full object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
