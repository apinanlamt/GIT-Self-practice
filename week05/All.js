import getLen, { echo as repeat, TAX as vat, Book } from "./Alleverything.js";

console.log(repeat("Hello"));       // Hello
console.log(getLen("Frontend"));    // 8
console.log(vat);                   // 0.07

const book1 = new Book("123", "JS Guide");
console.log(book1);
// Book { isbn: '123', title: 'JS Guide' }