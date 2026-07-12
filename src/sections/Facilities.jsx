import {
  FaXRay,
  FaHospital,
  FaUserMd,
  FaClock,
  FaParking,
  FaShieldAlt,
} from "react-icons/fa";

import SectionTitle from "../ui/SectionTitle";

const facilities = [
  {
    icon: <FaXRay />,
    title: "Digital X-Ray",
  },
  {
    icon: <FaHospital />,
    title: "Modern Equipment",
  },
  {
    icon: <FaUserMd />,
    title: "Experienced Staff",
  },
  {
    icon: <FaClock />,
    title: "Quick Reporting",
  },
  {
    icon: <FaParking />,
    title: "Easy Parking",
  },
  {
    icon: <FaShieldAlt />,
    title: "Clean Environment",
  },
];

function Facilities() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-6">

        <SectionTitle
          subtitle="Facilities"
          title="Our Facilities"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facilities.map((item, index) => (

            <div
              key={index}
              className="border rounded-3xl p-8 shadow hover:shadow-xl transition hover:-translate-y-2"
            >

              <div className="text-5xl text-red-600">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {item.title}

              </h3>

              <p className="text-gray-500 mt-4 leading-7">

                Providing reliable and quality digital imaging
                with patient-focused care.

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Facilities;