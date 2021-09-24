import { sum } from "./sum";

console.log(`calc : ${sum(1, 2)}`);

console.log(document.querySelector("p"));

document.querySelector(
  "p"
).innerText = `Hello Webpack dev Server! ${new Date().toISOString()}`;
