import React from "react";

const list = (props) => {
  return (
    <React.Fragment>
      <div className="displayBox">
        <div className="display"> {props.element} </div>
        <div className="dlt-btn" onClick={() => props.onDelete(props.id)}>
          ✖
        </div>
        {console.log(props)}
        <div className="edit">🖋</div>
        <div className="timer-box">
          <div className="timer">00.00 🕒</div>
          <div className="dateNow">last updated at {props.date}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default list;
