import "./Button.css";

// Destructuring the props object
const Button = ({ buttonType, children }) => {
  const handleClick = () => {};

  if (buttonType === "error") {
    return (
      <div>
        <button onClick={handleClick} className="button button-error">
          {children}
        </button>
      </div>
    );
  }

  if (buttonType === "primary") {
    return (
      <div>
        <button onClick={handleClick} className="button button-primary">
          {children}
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleClick} className="button">
        {children}
      </button>
    </div>
  );
};

export default Button;
