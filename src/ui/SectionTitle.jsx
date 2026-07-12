function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <span className="text-red-600 uppercase tracking-widest font-semibold">
        {subtitle}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-800">
        {title}
      </h2>

      <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>
    </div>
  );
}

export default SectionTitle;