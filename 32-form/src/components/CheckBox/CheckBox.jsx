import "./CheckBox.css";

const CheckBox = ({ children }) => {
  return (
    <div className="CheckBox">
      <input type="checkbox" />
      <label>{children}</label>
    </div>
  );
};

export default CheckBox;
