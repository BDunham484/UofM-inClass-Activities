// Prototype methods on constructor function

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
//   this.nap = function() {
//   console.log('a;lsdkjfa;lsdkjf')
// }
}

Dog.prototype.nap = function () {
  console.log('Zzzzzzzzz');
};

const dog = new Dog('Rex', 2, 'Bulldog');

console.log(dog)

dog.nap();
