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
      if (!window.confirm(`진짜 [${item.title}]을 삭제할까요?`)) {
        return;
      }
      // 1.찾아라!
      const found = todoItems.findIndex(
        (todoItem) => todoItem.seq === item.seq
      );
      if (found >= 0) {
        // 2. 배열을 복사
        let cloned = [...todoItems];
        // 3. 복사본에서 삭제
        cloned.splice(found, 1);
        // 4. 상태에 반영
        setTodoItems(cloned);
        alert("삭제했습니다!");
      } else {
        alert("잘못된 친굽니다");
        throw new Error("잘못된 값임!");
      }
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
