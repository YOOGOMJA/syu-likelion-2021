import React, { useState } from "react";

const CountUpHeader = (props) => {
  const { pageTitle, currentCounts } = props;
  // const pageTitle = props.pageTitle;
  // const currentCounts = props.currentCounts;
  // 구조분해할당
  return (
    <div>
      <h1>{pageTitle}</h1>
      <p style={{ color: "#fff" }}>current count : {currentCounts}</p>
    </div>
  );
};

const CountUpPage = () => {
  // 자바스크립트 코드다
  let pageTitle = "Hello like lion ! ";
  const [cnt, setCnt] = useState(1);

  const fn = {
    add: () => setCnt(cnt + 1),
    minus: () => setCnt(cnt - 1),
  };

  return (
    <div>
      <CountUpHeader pageTitle={pageTitle} currentCounts={cnt} />
      <button type='button' onClick={fn.add}>
        +
      </button>
      <button type='button' onClick={fn.minus}>
        -
      </button>
    </div>
  );
};

export default CountUpPage;
