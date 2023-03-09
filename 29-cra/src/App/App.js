import "./App.css";
import Button from "../Button/Button";
import Layout from "../Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <h1>React App</h1>
        <p>This is really working!</p>
        <p>sakldmlsamdklsam</p>
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
