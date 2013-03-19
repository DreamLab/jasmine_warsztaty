var Dog = require('./Dog.js').Dog;


var dog = new Dog();


dog.fetch(function (data)  {
    console.log('> result:', data);
});
