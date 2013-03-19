var Dog = require('./lib/Dog.js').Dog;


var dog = new Dog();


dog.fetch(function (data)  {
    console.log('> result:', data);
});
