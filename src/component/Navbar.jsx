import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "Properties", link: "#properties" },
    { name: "Agents", link: "#agents" },
    { name: "Reviews", link: "#reviews" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 backdrop-blur-md border-b border-black/10 py-1"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-Garamond font-bold text-neutral-800 cursor-pointer">
            MANSOOR
          </h1>
          <span className="hidden sm:inline text-sm text-neutral-500">
            Real Estate
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8 font-League text-lg">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="relative px-1 py-1 text-neutral-700 hover:text-orange-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md text-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
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
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navItems.map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-neutral-700 hover:bg-orange-50 hover:text-orange-600 transition"
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
