/**
 * @description 주어진 값을 더해줍니다
 * @param {number} a 첫째 숫자
 * @param {number} b 둘째 숫자
 * @returns {number} 합한 값
 */
function sum(a, b) {
  return a + b;
}

function printName(name) {
  console.log("my name is " + name);
}

function printAge(age) {
  console.log("my age is " + age);
}

export default sum;
export { printName, printAge };
