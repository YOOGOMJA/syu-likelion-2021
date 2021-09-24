/// 2. 함수의 선언

function func1() {
  console.log("Hello");
}

const func2 = function () {
  console.log("Hello");
};

// NEW! : ARROW FUNCTION

const func3 = (name) => {
  console.log("Hello, " + name);
};

const sum = (a, b) => ({ result: a + b, a, b });

const { result } = sum(1, 2);
console.log("result : " + result);
