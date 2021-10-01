let todos = [
  {
    seq: 1,
    title: "세션 듣기",
  },
  {
    seq: 2,
    title: "깃허브 확인하기",
  },
  {
    seq: 3,
    title: "리액트 조사하기",
  },
];
let todoSeq = todos.length;

const listElem = document.querySelector(".todo-list");

const fn = {
  clear: () => {
    const parent = document.querySelector(".todo-list");
    parent.replaceChildren([]);
  },
  findElement: (seq) => {
    return document.querySelector(`.todo-item[data-todo-seq="${seq}"]`);
  },
  insert: (element) => {
    const parent = document.querySelector(".todo-list");
    parent.appendChild(element);
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
  renderArray: async () => {
    fn.clear();
    const response = await axios.get("./todo-item.template.html");
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

const remove = (item) => {
  const index = todos.findIndex((_item) => _item === item);
  todos.splice(index, 1);
  console.log(todos);
  const foundByElement = fn.findElement(item.seq);
  foundByElement.remove();
};

const create = async () => {
  const input = document.querySelector(".todo-input");
  todoSeq += 1;
  todos.push({ seq: todoSeq, title: input.value });
  await fn.renderArray();

  input.value = "";
};

const init = async () => {
  fn.renderArray();
};

init();
