import React from "react";

const CountdownEl = ({ title, quote }) => {
  return (
    <div className="border-2 border-primary p-2 rotate-45">
      <div className="w-12 h-12 -rotate-45 flex flex-col items-center justify-center">
        <h1 className="font-bold text-xl">{title}</h1>
        <h1 className="font-mono">{quote}</h1>
      </div>
    </div>
  );
};

export default CountdownEl;
