import { FaHospital, FaClock, FaAward } from "react-icons/fa";

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <img
            src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=900"
            alt="About"
            className="rounded-3xl shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-red-600">
            About Manasvi Digital X-Ray Centre
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            We provide high-quality digital X-Ray services using modern
            equipment with fast and accurate reporting.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">

            <div className="text-center">
              <FaHospital className="text-4xl text-red-600 mx-auto"/>
              <p className="mt-3 font-semibold">Modern Equipment</p>
            </div>

            <div className="text-center">
              <FaClock className="text-4xl text-red-600 mx-auto"/>
              <p className="mt-3 font-semibold">Fast Service</p>
            </div>

            <div className="text-center">
              <FaAward className="text-4xl text-red-600 mx-auto"/>
              <p className="mt-3 font-semibold">Trusted Care</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;