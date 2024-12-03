import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";

const Navbar = ({ isSearchActive }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Equipments", path: "portfolio" },
    { link: "Blog", path: "blogs" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 ${
        isSearchActive ? "mt-24" : "mt-0"
      }`} // Apply dynamic margin based on isSearchActive state
    >
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? "bg-dark shadow-lg transition-all duration-300" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center text-base">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/gowllandfigmalogo (1).png"
              alt="Logo"
              className="h-8 md:h-10"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                className="text-base uppercase text-white hover:text-orange cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-full border border-gray-500 focus:outline-none ml-2 mr-2"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6 text-primary" />
              ) : (
                <FaBarsStaggered className="h-6 w-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-dark transition-transform transform ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          } z-40 px-4`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-600">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/images/gowllandfigmalogo (1).png"
                alt="Logo"
                className="h-8"
              />
            </a>

            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-full border border-gray-500 focus:outline-none ml-2 mr-2"
            >
              <FaXmark className="h-6 w-6 text-primary" />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col items-center justify-center mt-12 space-y-6">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                key={link}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                className="text-3xl text-white font-semibold uppercase hover:text-orange cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
