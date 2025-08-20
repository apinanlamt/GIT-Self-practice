// Homework Practice G2 write a function getFreqOfWords(sentence)

function getFreqOfWords2(sentence) {
    if (typeof sentence !== 'string') {
        return undefined;
    }
    const words = sentence.split(" ");
    const frequency = {};
    for (let word of words) {
        word = word.toLowerCase();
        frequency[word] = (frequency[word] || 0) + 1;
    }
    return frequency;
}

console.log(getFreqOfWords2("Today is present and present is your gift"));
console.log(getFreqOfWords2("Do your best just do it"));
console.log(getFreqOfWords2(null));
console.log(getFreqOfWords2(undefined));
console.log(getFreqOfWords2(12345));

console.log("-------------------------");

function square(num) {
    return num * num;
}

function doSomething(fn) {
    return fn(7); 
}

console.log(doSomething(square)); // 49

console.log("-------------------------");

const divide = (a, b) => a / b;

console.log(divide(20, 4)); // 5

console.log("-------------------------");

function sayHello() {
    return "Hello World";
}

function wrapper() {
    return sayHello;
}

console.log(wrapper());   // [Function: sayHello]
console.log(wrapper()()); // Hello World

console.log("-------------------------");

function updateCar(obj) {
    obj.year = 2025;
}

let car = { brand: "Toyota", year: 2020 };
console.log(car.year); // 2020
updateCar(car);
console.log(car.year); // 2025

console.log("-------------------------");

function multiply(a, b, c) {
    return a * b * c;
}

let arr = [2, 4, 6];
console.log(multiply(...arr)); // 48

console.log("-------------------------");

function sumAll(...nums) {
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

console.log("-------------------------");
