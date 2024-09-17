// Define the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Regular method
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Arrow function as a member function
    getDetails = () => {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


const person1 = new Person("Spandan Deb", 20);


console.log(person1.greet()); 
console.log(person1.getDetails()); 


const printPersonDetails = (person) => {
    console.log(`Person Details - Name: ${person.name}, Age: ${person.age}`);
};


printPersonDetails(person1); 


//Using the constructor function 

function Personn(name, age) {
    this.name = name;
    this.age = age;

 
    this.greet = function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    };

  
    this.getDetails = () => {
        return `Name: ${this.name}, Age: ${this.age}`;
    };
}


const person2 = new Personn("Spandan Deb", 20);


console.log(person2.greet()); 
console.log(person2.getDetails()); 

// Non-member function
const printPersonDetailss = function(person) {
    console.log(`Person Details - Name: ${person.name}, Age: ${person.age}`);
};

// Use the non-member function
printPersonDetailss(person2); 