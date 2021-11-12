// 할일 목록을 나타내는 컴포넌트
import React from "react";
import "./List.css";
import { default as TodoListItem } from "./ListItem.component";

const TodoList = (props) => {
  const { items, onRemove } = props;
  return (
    <div className='todo-list'>
      {items.map((item, index) => {
        return <TodoListItem item={item} onRemove={onRemove} key={index} />;
      })}
    </div>
  );
};

export default TodoList;
