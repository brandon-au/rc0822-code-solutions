// class example {
//   constructor(example) {
//     this.example = example;
//   }
// }

class ExampleClass {}

const example = new ExampleClass();
// const ExampleClass = new example('example');

console.log('typeof example:', typeof example);
console.log('value of example:', example);

console.log('typeof example.__proto__', typeof example.__proto__);
console.log('value of example.__proto__', example.__proto__);

console.log('typeof ExampleClass.prototype:', typeof ExampleClass.prototype);
console.log('value of ExampleClass.prototype:', ExampleClass.prototype);

console.log('example instanceof ExampleClass', example instanceof ExampleClass);

// example in documentation
// constructor function

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = () => this.name;

// const john = new Person('John Doe');
// console.log(john.getName());
// ------
// restructured function with classes

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }
