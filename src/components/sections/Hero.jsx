import { FaCheckCircle, FaPhoneAlt, FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-100">

      {/* Background Blur */}

      <div className="absolute w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-30 -top-32 -left-32"></div>

      <div className="absolute w-80 h-80 bg-red-300 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      <div className="container mx-auto px-6 py-24 lg:py-36">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div data-aos="fade-right">

            <div className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">

              🏥 Trusted Digital X-Ray Centre

            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">

              

              <span className="text-red-600">

                {" "}Digital

              </span>

              <br />

              X-Ray's & All Types Of Blood Test's.           </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">

              Delivering high-quality Digital X-Ray services with
              modern technology, experienced technicians and fast
              reporting in Wagholi, Pune.

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-red-600"/>

                Digital X-Ray

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-red-600"/>

                Home Service

              </div>



              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-red-600"/>

                Quick Reports

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-red-600"/>

                Affordable Charges

              </div>

              <div className="flex items-center gap-3">

                <FaCheckCircle className="text-red-600"/>

                Experienced Staff

              </div>

            </div>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="tel:+917887564545"
                className="bg-red-600 hover:bg-red-700 duration-300 text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-xl"
              >

                <FaPhoneAlt />

                Call Now

              </a>

              <a
                href="/services"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-300 px-8 py-4 rounded-full flex items-center gap-3"
              >
              
                Our Services

                <FaArrowRight />

              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="relative"
            data-aos="fade-left"
          >

            <img
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=900"
              alt=""
              className="rounded-[40px] shadow-2xl"
            />

            {/* Floating Card */}

            <div className="absolute top-10 -left-6 bg-white rounded-3x2 shadow-xl px-9 py-6">

              <h3 className="text-4xl font-bold text-red-600">

                100%

              </h3>

              <p className="text-gray-500">

                Digital Imaging

              </p>

            </div>

            <div className="absolute bottom-8 -right-6 bg-white rounded-3x2 shadow-xl px-8 py-5">

              <h3 className="text-4xl font-bold text-red-600">

                Fast

              </h3>

              <p className="text-gray-500">

                Accurate Reports

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;