// Challenge 1: Arrow Functions
const multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(2)) // Log the output

// Challenge 2: ES6 Method Definition
const person = {
	sayHello () {
		return "Hello!"
	},
	introduce(name) {
		return 'Hello, my name is ' + name;
	}
 }

console.log(person.sayHello())
console.log(person.introduce('Naveen'))

// Challenge 3: filter() Method
const numbers = [1, 2, 3, 4, 5, 6];

const filterEvenNumbers = numbers.filter((num) => num % 2 == 0);
console.log(filterEvenNumbers);

// Challenge 4: Objects
const cars = {
	make: 'Bajaj',
	model: 'A1',
	Year: 2023,
	isRunning: true,
	getInfo: function() {
		return this.make + ' ' + this.model + ' ' + this.Year;
	},
	stop: function() {
		this.isRunning = false
	},
	start: function() {
		this.isRunning = true
	}
}


console.log(cars.getInfo())
cars.stop ();
console.log(cars.isRunning)
cars.start ();
console.log(cars.isRunning)
