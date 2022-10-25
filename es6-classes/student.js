/* exported Student */

// function Student(firstName, lastName, subject) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.subject = subject;
// }

// before demo
class Student {
  constuctor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }

  getFullName() {
    const { firstName, lastName } = this;
    return `${firstName} ${lastName}`;
  }

  getIntroduction() {
    const { subject } = this;
    const fullName = this.getFullName();
    return `Hello, my name is ${fullName} and I am studying ${subject}.`;
  }
}

// after demo

// class Student {
//   constuctor(firstName, lastName, subject) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.subject = subject;
//   }

//   getFullName() {
//     const { firstName, lastName } = this;
//     return `${firstName} ${lastName}`;
//   }

//   getIntroduction() {
//     const { subject } = this.subject;
//     const fullName = this.getFullName();
//     return `Hello, my name is ${fullName} and I am studying ${subject}.`;
//   }
// }

// original starter code

// Student.prototype.getFullName = function () {
//   const { firstName, lastName } = this;
//   return `${firstName} ${lastName}`;
// };

// Student.prototype.getIntroduction = function () {
//   const { subject } = this;
//   const fullName = this.getFullName();
//   return `Hello, my name is ${fullName} and I am studying ${subject}.`;
// };
