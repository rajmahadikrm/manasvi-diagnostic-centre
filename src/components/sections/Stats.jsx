const stats = [
  {
    number: "2000+",
    title: "Happy Patients",
  },
  {
    number: "10+",
    title: "Years Experience",
  },
  {
    number: "100%",
    title: "Digital X-Ray",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

function Stats() {
  return (
    <section className="bg-red-600 py-20">

      <div className="container mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item,index)=>(

            <div key={index} className="text-center text-white">

              <h2 className="text-5xl font-bold">

                {item.number}

              </h2>

              <p className="mt-3">

                {item.title}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;