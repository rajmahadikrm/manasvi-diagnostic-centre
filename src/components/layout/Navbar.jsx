import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services/Contact", path: "/services" },

  ];

  return (
    <>
      {/* Top Bar */}

      <div className="bg-red-600 text-white hidden lg:block">

        <div className="container mx-auto flex justify-between py-2 px-6 text-sm">

          <div className="flex gap-6">

            <p className="flex items-center gap-2">

              <FaMapMarkerAlt />

              Manasvi Diagnostic centre Wagholi, Wagholi Rd, opp. nayara petrol pump, Wagholi, Awhalwadi, Pune, Maharashtra 412207

            </p>

          </div>

          <div>

            24/7 Service Avilable

          </div>

        </div>

      </div>

      {/* Navbar */}

      <header
        className={`sticky top-0 z-50 duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/90 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-6">

          <div className="flex justify-between items-center h-20">

            {/* Logo */}

            <Link
              to="/"
              className="text-2xl lg:text-3xl font-bold text-red-600"
            >
              Manasvi
              <span className="text-gray-800">
                {" "}
                Diagnostic Center , Wagholi
              </span>
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-8">

              {menu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium duration-300 hover:text-red-600 ${
                      isActive
                        ? "text-red-600"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </nav>

            {/* Call Button */}

            <a
              href="tel:++919370125127"
              className="hidden lg:flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 duration-300"
            >
              <FaPhoneAlt />

              Call Now
            </a>

            {/* Mobile */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-2xl"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        {open && (
          <div className="lg:hidden bg-white shadow-xl">

            <div className="flex flex-col">

              {menu.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 border-b hover:bg-red-50"
                >
                  {item.name}
                </NavLink>
              ))}

              <a
                href="tel:+919370125127"
                className="m-5 bg-red-600 text-white rounded-xl py-3 text-center"
              >
                Call Now
              </a>

            </div>

          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;