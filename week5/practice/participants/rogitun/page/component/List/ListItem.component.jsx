import React from "react";

const TodoListItem = (props) => {
  const remove = () => {
    props.onRemove(props.item);
  };
  return (
    <div class='todo-item'>
      <p class='todo-seq'>{props.item.seq}</p>
      <p class='todo-title'>{props.item.title}</p>
      <button class='todo-delete' onClick={remove}>
        삭제하기
      </button>
    </div>
  );
};

export default TodoListItem;
