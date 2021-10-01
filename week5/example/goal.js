// 할일이 쌓여있는 배열
let todos = [
  {
    seq: 1,
    title: "nodejs 설치하기",
  },
  {
    seq: 2,
    title: "깃허브 확인하기",
  },
  {
    seq: 3,
    title: "리액트 조사하기",
  },
  {
    seq: 4,
    title: "cra로 프로젝트 만들기",
  },
];
// 현재까지의 할일 일련 번호
let todoSeq = todos.length;

const fn = {
  clear: () => {
    const parent = document.querySelector(".todo-list");
    parent.replaceChildren([]);
  },
  findElement: (seq) => {
    return document.querySelector(`.todo-item[data-todo-seq="${seq}"]`);
  },
  convertToHTML: (raw) => {
    const containerElement = document.createElement("div");
    containerElement.innerHTML = raw + "";

    if (!containerElement.querySelector(".todo-item")) {
      throw new Error("파싱 에러");
    } else {
      return containerElement.childNodes[0];
    }
  },
  insert: (element) => {
    const parent = document.querySelector(".todo-list");
    parent.appendChild(element);
  },
  renderArray: async () => {
    /// todo-list의 children element들을 처음에 삭제하고
    fn.clear();
    /// todo item HTML template을 가져오고
    const response = await window.axios.get("./todo-item.template.html");
    /// 현재 todos를 탐색하면서, 그 내용을 화면에 추가합니다
    todos.forEach((item, index) => {
      const template = fn.convertToHTML(response.data);
      const seqElement = template.querySelector(".todo-seq");
      const titleElement = template.querySelector(".todo-title");
      const buttonElement = template.querySelector(".todo-delete");

      seqElement.innerText = item.seq;
      titleElement.innerText = item.title;
      buttonElement.onclick = () => remove(item);
      template.setAttribute("data-todo-seq", item.seq);

      fn.insert(template);
    });
  },
};

/// DELETE
const remove = (item) => {
  const index = todos.findIndex((_item) => _item === item);
  todos.splice(index, 1);
  console.log(todos);
  fn.renderArray();
};

/// CREATE
const create = async () => {
  const input = document.querySelector(".todo-input");
  todoSeq += 1;
  todos.push({ seq: todoSeq, title: input.value });
  await fn.renderArray();
  /// 나중에 똑같이 입력하지 않기위해
  /// 입력창을 한번 비워줌
  input.value = "";
};

const init = async () => {
  /// READ
  fn.renderArray();
};

init();
