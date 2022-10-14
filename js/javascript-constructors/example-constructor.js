function ExampleConstructor() {

}
console.log('value of ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof Example.Consturctor.prototype:', typeof ExampleConstructor.prototype);

var anExampleConstructor = new ExampleConstructor();
console.log('value of anExampleConstructor:', anExampleConstructor);
var instanceConstructor = anExampleConstructor instanceof ExampleConstructor;
console.log('value of instanceConstructor:', instanceConstructor);
