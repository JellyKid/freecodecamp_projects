/*
Fill in the object constructor with
the methods specified in the tests.

Those methods are getFirstName(),
getLastName(), getFullName(),
setFirstName(first), setLastName(last),
and setFullName(firstAndLast).

All functions that take an argument
have an arity of 1, and the argument
will be a string.

These methods must be the only available
means for interacting with the object.
*/


var Person = function(firstAndLast) {
  this.getFirstName = function(){
    return this.first;
  };

  this.getLastName = function(){
    return this.last;
  };

  this.getFullName = function(){
    return this.first + ' ' + this.last;
  };

  this.setFirstName = function(first){
    this.first = first;
  };

  this.setLastName = function(last){
    this.last = last;
  };
  this.setFullName = function(firstAndLast){
    this.first = firstAndLast.split(' ')[0];
    this.last = firstAndLast.split(' ')[1];
  };

  this.setFullName(firstAndLast);

  Object.defineProperty(this, 'first',{
    enumerable: false
  });
  Object.defineProperty(this, 'last',{
    enumerable: false
  });
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(Object.keys(bob).length);

/*
Object.keys(bob).length should return 6.
bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
*/
