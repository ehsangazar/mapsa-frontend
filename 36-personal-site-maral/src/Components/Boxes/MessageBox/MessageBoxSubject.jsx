import React from "react";
import NonStackInput from "../../Inputs/NonStackInput";
import MessageBoxContext from "../../../contexts/MessageBoxContext";

export default function MessageBoxSubject() {
  const messageBoxData = React.useContext(MessageBoxContext);

  return (
    <div className="d-flex message-box__subject">
      <NonStackInput {...messageBoxData.subject} />
    </div>
  );
}
