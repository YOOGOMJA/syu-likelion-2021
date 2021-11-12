import React from "react";

const TodoListItem = (props) => {
  const remove = () => {
    props.onRemove(props.item);
  };
  return (
    <div className='todo-item'>
      <p className='todo-seq'>{props.item.seq}</p>
      <p className='todo-title'>{props.item.title}</p>
      <button className='todo-delete' onClick={remove}>
        삭제하기
      </button>
    </div>
  );
};

export default TodoListItem;
