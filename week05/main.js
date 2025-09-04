import squ from "./mathUtil.js";

console.log(squ(5));

console.log("--------------------------------------");

import { toUpper, MAXLEN } from "./stringUtil.js";

console.log(toUpper("frontend"));
console.log(MAXLEN);

console.log("--------------------------------------");

import add ,{ multiply } from "./numberUtil.js";

console.log(add(4, 6));
console.log(multiply(3, 5));

console.log("--------------------------------------");

import { vat, ver } from "./config.js";

console.log(vat);
console.log(ver);

console.log("--------------------------------------");

import { Book } from "./book.js";

const book1 = new Book("111", "Learning ES Modules");
console.log(book1);

console.log("--------------------------------------");

import * as utils from "./utils.js";

console.log(utils.greet("JS"));
console.log(utils.PI);

console.log("--------------------------------------");

