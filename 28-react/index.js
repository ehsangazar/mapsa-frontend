// JAVASCRIPT
// document.getElementById("app").innerHTML = `
//     <h1>Hello Vanilla!</h1>
// `;

// REACT
// const App = () => {
//   return React.createElement("div", null, "Hello React!");
// };

// BUTTON COMPONENT
const Button = (props) => {
  return (
    <button
      style={{
        color: props.color,
        backgroundColor: props.bgColor,
      }}
    >
      {props.text}
    </button>
  );
};

// JSX -> Babel
// App => REACT COMPONENT
// LANAUGAGE => JSX
const App = () => {
  return (
    <div>
      <h2> JSX with Babel</h2>
      <p>Labore minim adipisicing nisi ex cillum sit enim irure id dolor.</p>
      <Button text="props click" />
      <br />
      <br />
      <Button text="click here" color="red" bgColor="yellow" />
    </div>
  );
};

// REACT DOM
ReactDOM.render(<App />, document.getElementById("app"));
// VIRTUAL DOM

// .innerHTML = ` -> HEAVY MULTIPLE TIMES
// REACT -> VIRTUAL DOM -> SINGLE TIME
