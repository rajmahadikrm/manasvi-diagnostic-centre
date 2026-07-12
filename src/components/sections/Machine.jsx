import { FaXRay, FaCheckCircle } from "react-icons/fa";

function Machine() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=900"
              alt="Digital X-Ray Machine"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div>

            <span className="text-red-600 font-semibold uppercase tracking-widest">
              Our Equipment
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Advanced Digital
              <span className="text-red-600"> X-Ray Machine</span>
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              We use modern Digital X-Ray technology that produces
              high-quality images while reducing radiation exposure.
              Our equipment ensures quick scanning and faster reporting.
            </p>

            <div className="space-y-5 mt-10">

              <div className="flex gap-4 items-center">

                <FaCheckCircle className="text-red-600 text-xl"/>

                Low Radiation Exposure

              </div>

              <div className="flex gap-4 items-center">

                <FaCheckCircle className="text-red-600 text-xl"/>

                High Resolution Images

              </div>

              <div className="flex gap-4 items-center">

                <FaCheckCircle className="text-red-600 text-xl"/>

                Quick Reporting

              </div>

              <div className="flex gap-4 items-center">

                <FaCheckCircle className="text-red-600 text-xl"/>

                Accurate Diagnosis Support

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Machine;