// 1. Promises and Async/Await

async function fetchWeather(city) {
    try {
    const apiKey = 'YOUR_API_KEY'; 
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    const data = await response.json();
    console.log(`Weather in ${city}: ${data.weather[0].description}`);
    }
    catch (error) {
        console.error('Error fetching weather:', error.message);
    }
}

fetchWeather('New York');


// 2. Closures

function createIdGenerator() {
    let id = 0;
    return function() {
        id++;
        return `id_${id}`;
    };
}

const generateId = createIdGenerator();
console.log(generateId()); // id_1
console.log(generateId()); // id_2

// 3. Prototypes and Inheritance

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

function Student(name, age, major) {
    // Call the Person constructor with the current context
    Person.call(this, name, age);
    this.major = major;
}

// Inherit from Person
Student.prototype = Object.create(Person.prototype);

// Set the constructor property back to Student
Student.prototype.constructor = Student;

// Adding a method specific to Student
Student.prototype.study = function() {
    console.log(`${this.name} is studying ${this.major}.`);
};

const john = new Person('John', 30);
john.sayHello(); // Hello, my name is John and I am 30 years old.

const jane = new Student('Jane', 20, 'Computer Science');
jane.sayHello(); // Hello, my name is Jane and I am 20 years old.
jane.study();

// 4. Modules (ES6)

// math.js
export function add(a, b) {
    return a + b;
}

// app.js
import { add } from './math.js';

console.log(add(5, 10)); // 15

// 5. Event Delegation

{/* <ul id="todo-list">
    <li>Task 1</li>
    <li>Task 2</li>
</ul>
<script>
    document.getElementById('todo-list').addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            event.target.classList.toggle('completed');
        }
    });
</script> */}


// 6. Functional Programming

const data = [1, 2, 3, 4, 5];

const doubleEvenNumbers = data
    .filter(num => num % 2 === 0)
    .map(num => num * 2);

console.log(doubleEvenNumbers); // [4, 8]

// 7. Currying
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // 10


// 8. Debouncing and Throttling
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const handleInput = debounce((event) => {
    console.log(`Searching for: ${event.target.value}`);
}, 300);

document.getElementById('search-input').addEventListener('input', handleInput);


