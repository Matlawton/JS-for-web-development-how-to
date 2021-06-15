function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
  }
   
  sayHi();
// What will the output be?

  // Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined. Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead

  //Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function. With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example). There is no value radius on that object, which returns undefined.

  //The unary plus tries to convert an operand to a number. true is 1, and false is 0. The string 'Funky' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.

  //In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood. JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement. mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undef

  // In JavaScript, all objects interact by reference when setting them equal to each other. First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.

  //new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object. When we use the == operator, it only checks whether it has the same value. They both have the value of 3, so it returns true. However, when we use the === operator, both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.

  //The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children. Since freddie is a child, the function is not passed down, and not available on the freddie instance: a TypeError is thrown.

  //It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser). In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.

  //What happens when we do this?

function bark() {
    console.log('Woof!');
  }
   
  bark.animal = 'dog';
  //This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects) A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.

  //You can't add properties to a constructor like you can with regular objects. If you want to add a feature to all objects at once, you have to use the prototype instead.


  //What's the output?

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
   
  const Funky= new Person('Funky', 'Programmer');
  const Dennis= Person('Dennis', 'Smith');
   
  console.log(Funky);
  console.log(Dennis);
  //For Dennis, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object! We said that this.firstName equals "Funky" and this.lastName equals "Smith". What we actually did, is defining global.firstName = 'Dennis' and global.lastName = 'Smith'. Dennis itself is left undefined, since we don't return a value from the Person function.

  //What are the three phases of event propagation?
  //During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins.

  //All objects have prototypes, except for the base object. The base object is the object created by the user, or an object that is created using the new keyword. The base object has access to some methods and properties, such as .toString. This is the reason why you can use built-in JavaScript methods! All of such methods are available on the prototype. Although JavaScript can't find it directly on your object, it goes down the prototype chain and finds it there, which makes it accessible for you.

  //JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another. In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".