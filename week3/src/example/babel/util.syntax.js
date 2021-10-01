/// STRING

const PERSON_NAME = "KyeongSoo Yoo";

const makeSentence = (name) => {
  return `hello, ${name}.`;
};

// hello, KyeongSoo Yoo
// console.log(makeSentence(PERSON_NAME));

/// ARRAY

const NAMES = ["YOO", "LEE", "PARK", "SEONG"];

const sayHello = (name) => {
  console.log(`hello! , ${name}`);
};

const _results = NAMES.map(function (item, index, arr) {
  console.log(item, index, arr);
  return `hello!, ${item}`;
});

console.log(_results);
