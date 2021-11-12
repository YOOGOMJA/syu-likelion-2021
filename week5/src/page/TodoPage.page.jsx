import React, { useState, useEffect } from "react";
import TodoTitle from "./component/Title/Title.component";
import { default as TodoInputForm } from "./component/Form/Form.component";
import { default as TodoList } from "./component/List/List.component";

const TodoPage = () => {
  const pageTitle = "LikeLion Todo List!!";
  const [todoItems, setTodoItems] = useState([
    { seq: 1, title: "리액트 시작해보기" },
    { seq: 2, title: "리액트 실습해보기" },
    { seq: 3, title: "리액트 실습해보기" },
  ]);
  const [todoItemSeqNum, setTodoItemSeqNum] = useState(todoItems.length);
  const ui = {
    /// 아이템을 삭제함
    remove: (item) => {
      // 찾아라, 같은애를
      // 복사해라 원본을
      // 없애라 찾은애를, 복사본에서
      // 덮어써라 todolist를
    },
    /// 아이템을 추가함
    create: (todo) => {
      if (todo && todo !== "") {
        // 1.
        const _todoItemSeqNum = todoItemSeqNum + 1;
        setTodoItems([
          ...todoItems,
          {
            seq: _todoItemSeqNum,
            title: todo,
          },
        ]);
        setTodoItemSeqNum(_todoItemSeqNum);
      } else {
        window.alert("할 일을 입력해주세요");
      }
    },
  };

  return (
    <div className='container'>
      {/* 제목 */}
      <TodoTitle title={pageTitle} />
      {/* 사용자 입력 */}
      <TodoInputForm onSubmit={ui.create} />
      {/* 할일 목록 */}
      <TodoList items={todoItems} onRemove={ui.remove} />
    </div>
  );
};

export default TodoPage;
