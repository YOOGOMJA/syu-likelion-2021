// 함수의 선언 방법
function func1() {
  console.log("func1");
}

var coppiedFunc = func1;
coppiedFunc();

var func2 = function () {
  console.log("func2");
};

func1();
func2();

// 객체 예제
var objectExample = {
  keyChar: "value1",
  keyNum: 1,
  keyArr: [1, 2, 3],
  keyFn: function () {
    console.log("hello!");
  },
};
