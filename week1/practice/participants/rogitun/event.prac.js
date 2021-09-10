function changeTo(type) {
  // 헤더 태그
  var header1 = window.document.querySelector("#header-1");
  if (type === "BLUE") {
    // TODO: header를 파랑색으로 변경하는 경우
    header1.classList.value='blue'
    header1.textContent="BLUE!"

  } else if (type === "RED") {
    header1.classList.value='red'
    header1.textContent="RED!"
    // TODO: header를 빨강색으로 변경하는 경우
  }
  else if(type==='GREEN'){
    header1.classList.value='green'
    header1.textContent="GREEN!"
  }
  else{
    var arr = ['green','red','blue'];
    var number = Math.floor(Math.random()*3);
    console.log(number);
    header1.classList.value = arr[number];
    header1.textContent = arr[number].toUpperCase()+"!"
  }
}
