import React, { Fragment } from "react";
import MessageBoxSubject from "./MessageBoxSubject";
import MessageBoxInfo from "./MessageBoxInfo";

export default function MessageBox() {
  return (
    <div className="message-box d-flex flex-col flex-grow-1">
      <>
        <MessageBoxSubject />
      </>
      <Fragment>
        <MessageBoxInfo />
      </Fragment>
    </div>
  );
}
