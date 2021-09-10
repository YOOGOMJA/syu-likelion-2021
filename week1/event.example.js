window.addEventListener("DOMContentLoaded", () => {
  // 버튼을 찾기
  var btn1 = window.document.querySelector("#btn-1");
  // 버튼에 이벤트 추가하기
  btn1.addEventListener("click", () => {
    // 클릭 이벤트 1
    // header 찾기
    var header = window.document.querySelector("#header-1");
    // 빨강 제거
    header.classList.remove("red");
    // 파랑 추가
    header.classList.add("blue");
  });
});

function myClickEvent() {
  // 클릭 이벤트 2
  console.log("clicked 2");
  // header 찾기
  var header = window.document.querySelector("#header-1");
  // 파랑 제거
  header.classList.remove("blue");
  // 빨강 추가
  header.classList.add("red");
}
