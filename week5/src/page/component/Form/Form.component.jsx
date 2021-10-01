// 사용자 입력을 추가하는 컴포넌트
import React from "react";
import "./Form.css";

const TodoInputForm = () => {
  return (
    <div className='todo-form'>
      <input type='text' className='todo-input' />
      <button type='button' className='todo-submit button'>
        +
      </button>
    </div>
  );
};

export default TodoInputForm;
