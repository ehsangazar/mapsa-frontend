import "./Button.css";

const Button = ({ type, id, disabled, children, handleClick, loading }) => {
  return (
    <button
      onClick={handleClick}
      className={`Button ${loading ? "ButtonLoading" : ""}`}
      type={type}
      id={id}
      disabled={disabled}
    >
      {loading && <div className="loading">Loading</div>}
      {!loading && children}
    </button>
  );
};

export default Button;
