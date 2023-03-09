import "./Button.css";

// Destructuring the props object
const Button = ({ buttonType, children }) => {
  const handleClick = () => {
    console.log("test");
  };

  if (buttonType === "error") {
    return (
      <div>
        <button onClick={handleClick} className="btn btn-error">
          {children}
        </button>
      </div>
    );
  }

  if (buttonType === "primary") {
    return (
      <div>
        <button onClick={handleClick} className="btn btn-primary">
          {children}
        </button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleClick} className="btn btn-secondary">
        {children}
      </button>
    </div>
  );
};

export default Button;
