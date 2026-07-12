import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">

      {/* Top */}

      <div className="container mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* About */}

          <div>

            <h2 className="text-3xl font-bold text-red-500">

              Manasvi

            </h2>

            <p className="font-semibold mt-2">

              Diagnostic Centre

            </p>

            <p className="mt-6 text-gray-400 leading-8">

              Providing reliable Digital X-Ray services with
              modern equipment, experienced staff and
              accurate reporting in Wagholi, Pune.

            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">

              Quick Links

            </h3>

            <ul className="space-y-4">

              <li>
                <Link to="/" className="hover:text-red-500">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-red-500">
                  About
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-red-500">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/gallery" className="hover:text-red-500">
                  Gallery
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-red-500">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold mb-6">

              X-Ray Services

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>Chest X-Ray</li>

              <li>Spine X-Ray</li>

              <li>Hand X-Ray</li>

              <li>Leg X-Ray</li>

              <li>Skull X-Ray</li>

              <li>All Types of Digital X-Ray</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">

              Contact

            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <FaPhoneAlt className="text-red-500 mt-1"/>

                <div>

                  <p>+91 78875 64545</p>

                </div>

              </div>

              <div className="flex gap-3">

                <FaMapMarkerAlt className="text-red-500 mt-1"/>

                <div>

                  <p>

                    Wagholi Rd,

                    <br/>

                    Opp. Nayara Petrol Pump,

                    <br/>

                    Wagholi,

                    Pune - 412207

                  </p>

                </div>

              </div>

              <div className="flex gap-3">

                <FaClock className="text-red-500 mt-1"/>

                <div>

                  <p>

                    Everyday

                    <br/>

                    24/7 Service Avilable 

                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700">

        <div className="container mx-auto px-6 py-6 flex flex-col lg:flex-row justify-between items-center">

          <p className="text-gray-400 text-center">

            © 2026 Manasvi Diagnostic Centre.
            All Rights Reserved.

          </p>

          <div className="flex gap-5 mt-5 lg:mt-0">

            <a
              href="#"
              className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center hover:bg-red-700 duration-300"
            >
              <FaFacebookF/>
            </a>

            <a
              href="https://www.instagram.com/manasvi_diagnostic_center26?igsh=MWRmM3Y3OXcwdXNtNA=="
              className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center hover:bg-red-700 duration-300"
            >
              <FaInstagram/>
            </a>

            <a
              href="https://wa.me/917887564545"
              className="bg-green-600 w-10 h-10 rounded-full flex justify-center items-center hover:bg-green-700 duration-300"
            >
              <FaWhatsapp/>
            </a>
            <a
  href="https://maps.google.com/?q=Manasvi+Diagnostic+Centre+Wagholi"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 text-white px-5 py-3 rounded-lg"
>
  View on Google Maps
</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;