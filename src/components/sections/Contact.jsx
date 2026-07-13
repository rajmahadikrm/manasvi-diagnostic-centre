import { BiMessageAlt } from "react-icons/bi";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="container mx-auto px-6">

        <h2 className="text-center text-4xl font-bold">

          Contact Us

        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-14">

          <div>

            <h3 className="text-3xl font-bold">

              Manasvi Digital X-Ray Centre

            </h3>

            <p className="mt-6 flex gap-4">

              <FaMapMarkerAlt className="text-red-600"/>

              Manasvi Diagnostic Centre
Wagholi Rd,
Opp. Nayara Petrol Pump,
Wagholi,
Awhalwadi,
Pune - 412207

            </p>

            <p className="mt-5 flex gap-4">

              <FaPhoneAlt className="text-red-600"/>

              +91 93701 25127
            </p>
                        <p className="mt-5 flex gap-4">

              <BiMessageAlt className="text-red-600"/>

              manasvidiagnostic26@gmail.com

            </p>
            <p className="mt-5 flex gap-4">

              <FaClock className="text-red-600"/>

              24/7 Service Avilable 

            </p>

          </div>

          <iframe
            title="map"
            className="rounded-3xl w-full h-96"
            src="https://www.google.com/maps?q=Manasvi+Diagnostic+Centre+Wagholi&output=embed"
          />

        </div>

      </div>
      <a
  href="https://maps.google.com/?q=Manasvi+Diagnostic+Centre+Wagholi"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-red-600 text-white px-5 py-3 rounded-lg"
>
  View on Google Maps
</a>

    </section>
  );
}

export default Contact;