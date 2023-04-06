import React from "react";
import MessageBoxContext from "../../../contexts/MessageBoxContext";

export default function MessageBoxInfo() {
  const messageBoxData = React.useContext(MessageBoxContext);
  return (
    <div className="d-flex flex-grow-1 message-box__message">
      <textarea {...messageBoxData.info}></textarea>
    </div>
  );
}
