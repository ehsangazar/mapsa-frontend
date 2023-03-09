import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="Header">
      <h2>HEADR</h2>
      <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>
        <li>
          <Link to="/about">AboutPage</Link>
        </li>
        <li>
          <Link to="/contact">ContactPage</Link>
        </li>
      </ul>
      <Button>LOGIN</Button>
      <Button>REGISTER</Button>
    </header>
  );
};

export default Header;
