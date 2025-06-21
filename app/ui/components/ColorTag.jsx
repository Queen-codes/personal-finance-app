const ColorTag = ({ color }) => {
  return (
    <div
      className="w-1 h-10 mr-3 rounded-full" // Increased height slightly and added rounded corners for a nicer look
      style={{ backgroundColor: color }} // Apply the color dynamically here
    ></div>
  );
};

export default ColorTag;
