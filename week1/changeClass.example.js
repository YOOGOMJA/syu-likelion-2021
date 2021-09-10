window.addEventListener("DOMContentLoaded", function () {
  // 1. h1 가져오기
  // var header1 = window.document.querySelector("#header-1");
  // 2. 클래스 조회
  let header1 = window.document.getElementById('header-1')
  let btn = window.document.getElementById('btn');
  btn.textContent = "button"
  btn.addEventListener('click',()=>{
    alert('btn clicked')
  })

  console.log(header1.classList);
  // 3. 클래스 추가하기
  header1.classList.add(["italic"]);
});


