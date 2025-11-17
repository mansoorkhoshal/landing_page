import { FaLinkedinIn, FaInstagram, FaGithub, FaDiscord } from "react-icons/fa";

const Footer = () => {
  const footerSections = [
    {
      title: "ABOUT US",
      description:
        "Donec quis tincidunt felis. Sed aliquet ac nulla a condimentum. Curabitur massa sapien.",
      social: [
        {
          icon: <FaLinkedinIn />,
          link: "https://www.linkedin.com/in/mansoorkhoshal/",
        },
        { icon: <FaGithub />, link: "https://github.com/mansoorkhoshal" },
        {
          icon: <FaDiscord />,
          link: "https://discord.com/users/1368626128222163034",
        },
        { icon: <FaInstagram />, link: "https://instagram.com/mansoorkhoshal" },
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
    <footer className="bg-orange-500 text-white pt-12 w-full overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-3 sm:px-6 min-w-0">
        {footerSections.map((section, index) => (
          <div key={index} className="min-w-0">
            <h3 className="text-lg font-semibold mb-4 border-l-4 border-white pl-2">
              {section.title}
            </h3>

            {section.description && (
              <>
                <p className="text-sm leading-relaxed mb-4">
                  {section.description}
                </p>

                <div className="flex flex-wrap gap-4 text-xl">
                  {section.social?.map((s, i) => (
                    <a
                      key={i}
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-200 inline-flex items-center justify-center p-1"
                      aria-label={`open social ${i + 1}`}
                    >
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-200 hover:underline underline-offset-4 transition duration-200 break "
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

      <div className="bg-black text-center text-xl text-gray-200 mt-10 p-6 font-Garamond w-full">
        © {new Date().getFullYear()} Mansoor Khoshal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
