/// 2. 함수의 선언

function func1() {
  console.log("Hello");
}

const func2 = function () {
  console.log("Hello");
};

// NEW! : ARROW FUNCTION
// 1. 형태
// 2. 리턴이 특이할 수 있음
// 3. scope에 대해서 알아야 할 수도 있음
const func3 = (name) => {
  console.log("Hello, " + name);
};

const sum = (a, b) => ({ result: a + b, a, b });

const { result } = sum(1, 2);
console.log("result : " + result);
