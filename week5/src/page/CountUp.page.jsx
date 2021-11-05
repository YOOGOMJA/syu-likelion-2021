import React, { useState } from "react";

const CountUpPage = () => {
  const [counts, setCounts] = useState(0);

  return (
    <div>
      <h1>Current Counts : {counts}</h1>
      <button
        type='button'
        onClick={() => {
          setCounts(counts + 1);
        }}>
        +
      </button>
    </div>
  );
};

export default CountUpPage;
