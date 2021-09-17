function add(a, b) {
  var result = a + b;
  console.log("[add] 계산완료 ! " + result);
  return result;
}

// SYNC CALL
function syncFn() {
  var num1 = 1;
  var num2 = 3;

  console.log("[sync] num1 : " + num1 + " num2 : " + num2);
  var result = add(num1, num2);
  console.log("[sync] 덧셈 결과 ! : " + result);
}

// ASYNC CALL
function asyncFn() {
  var num1 = 1;
  var num2 = 3;
  var result = 0;

  console.log("[async] num1 : " + num1 + " num2 : " + num2);
  window.setTimeout(function () {
    result = add(num1, num2);
  }, 1000);

  console.log("[async] 덧셈 결과 ! : " + result);
}
