import React from "react";
import wave from "../../style/media/wave.svg";
import wave2 from "../../style/media/wave-2.svg";
import ThemeContext from "../../contexts/ThemeContext";

export default function Background({ children, waveMode }) {
  const themeData = React.useContext(ThemeContext);

  return (
    <div
      className={`background flex-grow-1 ${themeData.theme}`}
      style={{
        backgroundImage: `url(${
          waveMode === "home" ? wave : waveMode === "contact" ? wave2 : ""
        })`,
        backgroundColor: themeData.theme === "light" ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}
