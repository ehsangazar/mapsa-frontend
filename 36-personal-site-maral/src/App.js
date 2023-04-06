import "./style/Reset.css";
import "./style/UtilityClasses.css";
import "./style/App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import ThemeContext from "./contexts/ThemeContext";
import React from "react";

function App() {
  const [theme, setTheme] = React.useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" Component={Home} />
            <Route path="about" Component={About} />
            <Route path="contact" Component={Contact} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
