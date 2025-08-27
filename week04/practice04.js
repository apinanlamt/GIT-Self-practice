const numbers = [10, 23, 45, 66, 78, 91, 100];

const evenNumbers = numbers.filter(num => num % 2 === 0).map(num => `${num} is even`);

console.log(evenNumbers);

console.log("-------------------------");

const products = [
  { id: 1, name: "Pen", price: 5, quantity: 3 },
  { id: 2, name: "Book", price: 20, quantity: 2 },
  { id: 3, name: "Bag", price: 100, quantity: 1 },
];

const total = products.reduce((acc,products) => {
    return acc + (products.price * products.quantity)
}, 0)

console.log({ total });

console.log("-------------------------");

const students = [
  { id: 1, name: "Ann" },
  { id: 2, name: "Bee" },
  { id: 3, name: "Cat" },
];

const foundStudent = students.find(student => student.id === 2);

if (foundStudent) {
  console.log(foundStudent.name);
} else {
  console.log("not found");
}

console.log("-------------------------");

const fruits = ["apple", "banana", "cherry", "mango", "orange"];

const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

fruits.splice(1, 1, "grape");
console.log(fruits);  

console.log("-------------------------");

const words = ["hello", "world", "javascript"];

const upper = words.map(word => word.toUpperCase());
console.log(upper); 

const filled = words.fill("done");
console.log(filled); 

console.log("-------------------------");
