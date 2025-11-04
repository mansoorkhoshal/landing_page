import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaReddit,
  FaDiscord,
} from "react-icons/fa";

const Footer = () => {
  const footerSections = [
    {
      title: "ABOUT US",
      description:
        "Donec quis tincidunt felis. Sed aliquet ac nulla a condimentum. Curabitur massa sapien.",
      social: [
        { icon: <FaLinkedinIn />, link: "#" },
        { icon: <FaGithub />, link: "#" },
        { icon: <FaReddit />, link: "#" },
        { icon: <FaDiscord />, link: "#" },
        { icon: <FaInstagram />, link: "#" },
      ],
    },
    {
      title: "OTHER LINKS",
      links: ["Register", "Forum", "Affiliate", "FAQ"],
    },
    {
      title: "RELATED LINKS",
      links: ["About Us", "Why Buy With Us?", "Our Agent", "Contact Us"],
    },
    {
      title: "RESOURCES",
      links: ["Terms", "Licenses", "Become an Affiliate", "Help Center"],
    },
  ];

  return (
    <footer className="bg-orange-500 text-white pt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-3 sm:px-6">
        {footerSections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-2">
              {section.title}
            </h3>

            {section.description && (
              // this is the other new concept for me that if
              // something exsit they show it if not they ignore this part and goes ago.
              <>
                <p className="text-sm leading-relaxed mb-4">
                  {section.description}
                </p>
                <div className="flex flex-wrap gap-4 text-xl">
                  {/* Added flex-wrap and gap instead of space-x to prevent breaking under 420px */}
                  {section.social?.map((s, i) => (
                    // In this code talha brother i used the (optional chaining)
                    // so it work if something exsit in the section.social part.
                    // okay and Im very happy to learn this its realy amazing for me.
                    <a key={i} href={s.link} className="hover:text-gray-200">
                      {s.icon}
                    </a>
                  ))}
                </div>
              </>
            )}

            {section.links && (
              <ul className="space-y-2 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-gray-200 hover:underline underline-offset-4 transition duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="bg-black text-center text-xl text-gray-200 mt-10 p-6 font-Garamond">
        © {new Date().getFullYear()} Mansoor Khoshal. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
