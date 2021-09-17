function load() {
  console.log("click!");
  var element = document.getElementById("items");
  var url =
    "https://jsonplaceholder.typicode.com/posts/" +
    (element.children.length + 1);

  axios.get(url).then((response) => {
    console.log(response);
    if (response.status === 200) {
      render(response.data);
    }
  });
}

function render(response) {
  var element = document.getElementById("items");

  var titleElement = document.createElement("h1");
  titleElement.innerText = "[ " + response.id + " ] " + response.title;

  var contentElement = document.createElement("p");
  contentElement.innerText = response.body;

  var wrapperElement = document.createElement("div");
  wrapperElement.appendChild(titleElement);
  wrapperElement.appendChild(contentElement);

  element.appendChild(wrapperElement);
}
