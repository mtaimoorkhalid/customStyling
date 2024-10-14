import  { useState } from "react";

const App = () => {
  const [primaryColor, setPrimaryColor] = useState("#3498db");

  // Function to change the CSS variable
  const handleChangeColor = (color) => {
    setPrimaryColor(color);
    // Set the CSS variable dynamically
    document.documentElement.style.setProperty("--primary-color", color);
  };

  return (
    <div>
      <h1 >
        This text uses the CSS variable for color
      </h1>
      <input
        type="color"
        value={primaryColor}
        onChange={(e) => handleChangeColor(e.target.value)}
      />
    </div>
  );
};

export default App;
