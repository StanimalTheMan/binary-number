import React from "react";

const Digit = ({ ind, digit, toggleClick }) => {
  return (
    <div
      onClick={() => {
        toggleClick(ind);
      }}
    >
      {digit}
    </div>
  );
};

export default Digit;
