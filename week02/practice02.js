// Homework Shallow Equality

let book1 = {
    isbn: 123456789,
    title: "JavaScript",
}

let book2 = {
    isbn: 123456789,
    title: "JavaScript",
}

function shallowEquality(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
}

console.log("shallow equality: " + shallowEquality(book1, book2));  // true

console.log("-------------------------");

const student = {
    id: 1001,
    name: "Ann",
    subjects: ["Math", "JS", "CSS"],
    getSubjects: function() {
        return this.subjects.join(", ");
    }
};

console.log(student.getSubjects()); // "Math, JS, CSS"
console.log(student); 

console.log("-------------------------");

function Studentt (id, name, major) {
    this.id = id;
    this.name = name;
    this.major = major;
    this.getProfile = function() {
        return `${this.id} - ${this.name} (${this.major})`;
    }
}

const student1 = new Studentt(1001, "Ann", "IT");
const student2 = new Studentt(1002, "Bob", "CS");

console.log(student1.getProfile());
console.log(student2.getProfile());

console.log("-------------------------");

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    getCarInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}`;
    }

    setModel(newModel) {
        this.model = newModel;
    }
}

const myCar = new Car("Toyota", "Yaris");
console.log(myCar.getCarInfo()); // "Brand: Toyota, Model: Yaris"
myCar.setModel("Corolla");
console.log(myCar.getCarInfo()); // "Brand: Toyota, Model: Corolla"

console.log("-------------------------");

const animal = {
    type: "Mammal",
    sound: function() {
        return "Some sound";
    }
};

const dog = Object.create(animal);
dog.breed = "Bulldog";
dog.sound = function() {
    return "Woof!";
};

console.log(dog.type); // "Mammal"
console.log(dog.breed); // "Bulldog"
console.log(dog.sound()); // "Woof!"

console.log("-------------------------");

const book11 = { isbn: 111, title: "JS" };
const book22 = { isbn: 111, title: "JS" };

function isSameBook(x, y) {
    return x.isbn === y.isbn;
}

const { isbn, title } = book11;
console.log(`ISBN : ${isbn}, Title : ${title}`); // "ISBN: 111, Title: JS"
console.log("Are the books the same ? : " + isSameBook(book11, book22)); // true

console.log("-------------------------");

