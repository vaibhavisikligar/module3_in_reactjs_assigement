import { useState } from "react";
import React from "react";

function Number() {
  const [isNumber, setNumber] = useState(0);
  function increment() {
    setNumber(isNumber + 1);
  }
  function decrement() {
    if (isNumber > 0) {
      setNumber(isNumber - 1);
    }
  }
  return (
    <div className="container-fluid py-5 ">
      <div className="container">
        <div className="row">
          <div className="card mb-5 ">
            <div className="card-header">
              <h2>Number example</h2>
            </div>
            <div className="card-body">
              <h2>Number: {isNumber}</h2>
            </div>
            <div className="card-footer d-block">
              <button
                className="btn btn-danger me-2"
                onClick={() => increment()}
              >
                +
              </button>
              <button className="btn btn-danger " onClick={() => decrement()}>
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Number;
