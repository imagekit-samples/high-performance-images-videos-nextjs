const ColorSwatch = ({ colors }) => {
  return (
    <div className="mb-10 overflow-x-hidden">
      <h3 className="font-semibold text-lg">COLORS</h3>
      <div className="flex flex-wrap gap-4 mt-3 w-full">
        {Object.entries(colors).map(([colorName, colorCode], index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: `#${colorCode}` }}></div>
            <span className="text-xs w-10 text-center mt-2 text-gray-400">{colorName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSwatch;
