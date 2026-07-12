import { FaClock } from "react-icons/fa";

function WorkingHours() {
  return (
    <section className="bg-red-600 py-20">

      <div className="container mx-auto px-6">

        <div className="text-center text-white">

          <FaClock className="text-6xl mx-auto mb-6"/>

          <h2 className="text-5xl font-bold">

            Working Hours

          </h2>

          <div className="mt-10 space-y-4 text-xl">

            <p>Monday - Saturday : 8:00 AM - 9:00 PM</p>

            <p>Sunday : Emergency Only</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WorkingHours;