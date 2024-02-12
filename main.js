let user = "John Doe";
console.log(user);

const student = "Daria";
console.log(student);

user = student;
console.log('user: ' + user) // в user 'Daria'

let test = 1;
test++;
test += '1';
console.log(test); // test = 21
test--;
console.log(test) // test = 20
console.log(Boolean(test));

let mas1 = [2, 3, 5, 8];
let composition = 1;
for (let i = 0; i < 4; i++) {
  composition *= mas1[i];
}
console.log('Composition of mas1: ' + composition);

let mas2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < 8; i++) {
  if (mas2[i] > 5 && mas2[i] < 10) {
    console.log(mas2[i])
  }
}

console.log('Even numbers:')
for (let i = 0; i < 8; i++) {
  if (mas2[i] % 2 === 0) {
    console.log(mas2[i]);
  }
}

//lesson-3 tasks
function palindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false
    }
  }
  return true;
}
console.log(palindrome('шалаш'));

function  min(a, b) {
  return (a < b) ? a : b;
}

function max(a, b) {
  return (a > b) ? a : b;
}

console.log(min(7,2));
console.log(max(10, 20));

let arr = [12, 53, 20, 18, 22, 100, 43, 57, 50, 1];
function changeZero(array) {  //error
  for (let i = 0; i < array.length; i++) {
    array[i].push();
    for (let j = 0; j < array[i].length; i++) {
      if (array[i][j] === 0 ) {
        array[i][j] = 'zero'
      }
    }
    }
  return array
}

console.log(changeZero(arr));

