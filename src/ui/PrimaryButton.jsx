function PrimaryButton({ text }) {
  return (
    <button className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-7 py-4 rounded-full font-semibold shadow-lg">
      {text}
    </button>
  );
}

export default PrimaryButton;