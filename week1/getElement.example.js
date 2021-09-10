// HTML이 불러와 진 후, 함수의 내용이 실행됩니다.
window.addEventListener("DOMContentLoaded", function () {
  // 1. h1을 가져오기
  var header1 = document.getElementById("header-1");
  // 2. h1의 innerHTML을 출력
  console.log(header1.innerText);
});
