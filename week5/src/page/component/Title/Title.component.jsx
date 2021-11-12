// 제목을 나타내는 컴포넌트
import React from "react";
import "./Title.css";

const TodoTitle = (props) => {
  const { title } = props;
  // 자바스크립트 코드
  return <h1>{title}</h1>;
};

export default TodoTitle;
