/* exported yakko, wakko, dot */

var yakko = {
  age: 14,
  name: 'Yakko',
  role: 'brother'
};

var wakko = {
  age: 11,
  name: 'Wakko',
  role: 'brother'
};

var dot = {
  age: 10,
  name: 'Dot',
  role: 'sister'
// removed below function from above objects
};

var warnerPrototype = { // defines below function as assigns to a variable (abstraction)
  describe: function () {
    var description = this.name + ' is a ' +
      this.age + '-year-old Warner ' + this.role + '.';
    return description;
  }
};

Object.setPrototypeOf(yakko, warnerPrototype); // takes created variable and delegates to the object so it can be used
Object.setPrototypeOf(wakko, warnerPrototype);
Object.setPrototypeOf(dot, warnerPrototype);
