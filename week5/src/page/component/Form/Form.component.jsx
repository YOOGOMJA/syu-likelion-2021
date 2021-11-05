// 사용자 입력을 추가하는 컴포넌트
import React, { useState } from "react";
import "./Form.css";

const TodoInputForm = ({ onSubmit }) => {
  const [todo, setTodo] = useState("");
  const insert = () => {
    onSubmit(todo);
    setTodo("");
  };

  return (
    <div className='todo-form'>
      <input
        type='text'
        className='todo-input'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type='button' className='todo-submit button' onClick={insert}>
        +
      </button>
    </div>
  );
};

export default TodoInputForm;
