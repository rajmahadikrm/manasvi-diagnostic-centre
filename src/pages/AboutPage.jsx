import { FaHospital, FaClock, FaAward } from "react-icons/fa";

function About() {
  return (
    <section className="py-20 bg-white">

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

        <img
          src="\images\seven.jpeg"
          alt="X-Ray Centre"
          className="rounded-3xl shadow-xl"
        />

        <div>

          <span className="text-red-600 font-semibold uppercase">
            About Us
          </span>

          <h2 className="text-4xl font-bold mt-3">
            Manasvi Digital X-Ray Centre
          </h2>

          <p className="text-gray-600 mt-6 leading-8">
            We provide high-quality Digital X-Ray services using modern
            equipment and experienced technicians. Our mission is to deliver
            accurate imaging with fast reporting in a clean and comfortable
            environment.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="text-center">
              <FaHospital className="text-4xl text-red-600 mx-auto"/>
              <p className="font-semibold mt-3">Modern Equipment</p>
            </div>

            <div className="text-center">
              <FaClock className="text-4xl text-red-600 mx-auto"/>
              <p className="font-semibold mt-3">Fast Service</p>
            </div>

            <div className="text-center">
              <FaAward className="text-4xl text-red-600 mx-auto"/>
              <p className="font-semibold mt-3">Trusted Care</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;