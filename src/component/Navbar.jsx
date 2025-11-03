import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Properties", link: "/properties" },
    { name: "Agents", link: "/agents" },
    { name: "Reviews", link: "/reviews" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 shadow-lg bg-white/30 backdrop-blur-md border-b border-gray-200 py-3"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between z-50 text-neutral-600">
        <div className="flex flex-1">
          <img src={Logo} alt="Home Image" className="cursor-pointer" />
        </div>

        <div className="hidden lg:flex lg:flex-1 items-center justify-end font-normal font-League">
          <ul className="flex gap-8 text-2xl">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-orange-500 items-center hover:duration-400"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <button
          className="lg:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden transition-max-height duration-500 overflow-hidden ${
          open ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3">
          <ul className="flex flex-col gap-4 p-4 text-lg text-neutral-600">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-orange-500 hover:duration-300 flex gap-2"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
