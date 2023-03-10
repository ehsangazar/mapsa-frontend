import "./App.css";
import RegisterForm from "../../containers/RegisterForm/RegisterForm";
import Count from "../../containers/Count/Count";
import CountOld from "../../containers/Count/CountOld";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CountOld />
      <Count />
      <div>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <RegisterForm />
    </div>
  );
}

export default App;
