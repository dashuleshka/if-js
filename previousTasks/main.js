let user = "John Doe";
console.log(user);

const student = "Daria";
console.log(student);

user = student;
console.log("user: " + user); // в user 'Daria'

let test = 1;
test++;
test += "1";
console.log(test); // test = 21
test--;
console.log(test); // test = 20
console.log(Boolean(test));

let mas1 = [2, 3, 5, 8];
let composition = 1;
for (let i = 0; i < 4; i++) {
  composition *= mas1[i];
}
console.log("Composition of mas1: " + composition);

let mas2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < 8; i++) {
  if (mas2[i] > 5 && mas2[i] < 10) {
    console.log(mas2[i]);
  }
}

console.log("Even numbers:");
for (let i = 0; i < 8; i++) {
  if (mas2[i] % 2 === 0) {
    console.log(mas2[i]);
  }
}

//lesson-3 tasks
function palindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("шалаш"));

const min = (a, b) => a < b ? a : b;

const max = (a, b) => a > b ? a : b;

console.log(min(7, 2));
console.log(max(10, 20));

//lesson-4
const sum = (a) => (b) => a + b;
console.log(sum(5)(2));

function init() {
  const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
  return function(text) {
    for (let i = 0; i === 0; i++) {
      text.addEventListener("click", (event) => {
        event.target.style.color = colors[i];
        i += 1;
        if (i === colors.length) {
          i = 0;
        }
      });
    }
  }
}

let inp1 = init();
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");
console.log(inp1(text1));
console.log(inp1(text2));
console.log(inp1(text3));
