// what will print?
function* evenGenerator() {
  let n = 2;

  while(true) {
    yield n;
    n += 2;
  }
}

const evens = evenGenerator();

console.log(evens.next().value);
console.log(evens.next().value);
console.log(evens.next().value);
console.log(evens.next().value);

// for(let even of evens) {
//   console.log(even);
// }
