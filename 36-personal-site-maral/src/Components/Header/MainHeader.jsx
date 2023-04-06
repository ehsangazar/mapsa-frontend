import React from "react";
import ThemeContext from "../../contexts/ThemeContext";
import MeBox from "../Boxes/MeBox";
import MainNav from "../Navigation/MainNav";
import "./MainHeader.scss";

export default function MainHeader() {
  const themeData = React.useContext(ThemeContext);
  const handleChangeColor = () => {
    themeData.setTheme(themeData.theme === "light" ? "dark" : "light");
  };
  return (
    <header className="test-class main-header d-flex jc-space-between ai-center">
      <MeBox name={"maral najafi"} position={"front end developer"} />
      <MainNav />
      <div className="myname">Ehsan Gazar</div>
      <div>
        <button onClick={handleChangeColor}>
          {themeData.theme === "light" ? "dark" : "light"}
        </button>
      </div>
    </header>
  );
}
