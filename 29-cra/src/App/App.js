import "./App.css";
import Button from "../Button/Button";
import Layout from "../Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar from "../Avatar/Avatar";

function App() {
  return (
    <div className="App container">
      <Layout>
        <h1>React App</h1>
        <p>This is really working!</p>
        <p>sakldmlsamdklsam</p>
        <br />
        <Avatar image="https://placekitten.com/200/300" />
        <br />
        <Button buttonType="primary">Send Click</Button>
        <Button buttonType="secondary">Send Click Secondary</Button>
        <Button buttonType="error">Send Click Error</Button>
      </Layout>
    </div>
  );
}

export default App;
// hot reloading
