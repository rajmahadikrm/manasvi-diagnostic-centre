import SectionTitle from "../ui/SectionTitle";

const steps = [
  {
    number: "01",
    title: "Visit Centre",
    text: "Walk in or contact us before your visit.",
  },
  {
    number: "02",
    title: "Digital X-Ray",
    text: "Our technician performs the X-Ray safely.",
  },
  {
    number: "03",
    title: "Collect Report",
    text: "Receive your report quickly.",
  },
];

function Process() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="container mx-auto px-6">

        <SectionTitle
          subtitle="Process"
          title="How It Works"
        />

        <div className="grid lg:grid-cols-3 gap-8">

          {steps.map((step) => (

            <div
              key={step.number}
              className="bg-white rounded-3xl shadow-lg p-10 text-center"
            >

              <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-3xl font-bold mx-auto">

                {step.number}

              </div>

              <h3 className="text-2xl font-bold mt-8">

                {step.title}

              </h3>

              <p className="mt-5 text-gray-500">

                {step.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;