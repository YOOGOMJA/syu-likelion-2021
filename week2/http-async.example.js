// https://developer.mozilla.org/ko/docs/Web/Guide/AJAX/Getting_Started

function load() {
  console.log("click!!");
  var element = document.getElementById("items");
  var url =
    "https://jsonplaceholder.typicode.com/posts/" +
    (element.children.length + 1);
  var httpRequest = new XMLHttpRequest();
  var isAsyncRequest = false;
  httpRequest.onreadystatechange = changeEventHandler;
  httpRequest.open("GET", url, isAsyncRequest);
  console.log("sent!!!");
  httpRequest.send(null);
  console.log("send finished!!", httpRequest.readyState);
}

function changeEventHandler(request) {
  var currentRequest = request.currentTarget;
  console.log("state changed! : ", request.currentTarget.readyState);

  if (currentRequest.readyState === XMLHttpRequest.DONE) {
    if (currentRequest.status === 200) {
      /// 요청 성공
      console.log(currentRequest.responseText);
      render(currentRequest.responseText);
    } else {
      console.log("failed");
    }
  }
}

function render(response) {
  var parsed = JSON.parse(response);
  var element = document.getElementById("items");

  var titleElement = document.createElement("h1");
  titleElement.innerText = "[ " + parsed.id + " ] " + parsed.title;

  var contentElement = document.createElement("p");
  contentElement.innerText = parsed.body;

  var wrapperElement = document.createElement("div");
  wrapperElement.appendChild(titleElement);
  wrapperElement.appendChild(contentElement);

  element.appendChild(wrapperElement);
}
