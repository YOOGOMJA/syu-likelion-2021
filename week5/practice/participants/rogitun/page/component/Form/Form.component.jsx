// 사용자 입력을 추가하는 컴포넌트
import React, { useState } from "react";
import "./Form.css";

const TodoInputForm = (props) => {
 
  // const create = () => {
  //   props.onInsert();
  // };

  const [string,setString] = useState("");

  const Change = (e) => {
    setString(e.target.value);
    console.log(e.target.value);
  };
 
  const Submit = (e) =>{
    e.preventDefault();
    props.onInsert(string);
    setString("");
  }

  return (
    <form>
    <div className='todo-form'>
      <input type='text' name='text' className='todo-input' value={string} onChange={Change}/>
      <button type='submit' className='todo-submit button' onClick={Submit}>
        +
      </button>
    </div>
    </form>
  );
};

export default TodoInputForm;
