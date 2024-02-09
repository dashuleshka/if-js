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