// Challenge 1: Array of Objects
console.log("Challenge 1: Array of Objects");

const employees = {
  employee: [
    {
      name: "Naveen",
      age: 35,
      position: "team lead",
      salary: 24,
    },
    {
      name: "Aakash",
      age: 50,
      position: "JavaScript Engineer",
      salary: 44,
    },
    {
      name: "Ram",
      age: 10,
      position: "WordPress Developer",
      salary: 90,
    },
  ],
};

function getAverageSalary() {
  let sum = 0;

  employees.employee.forEach((element) => (sum += element.salary));
  const averageSalary = sum / employees.employee.length;
  return averageSalary;
}

const averageSalary = getAverageSalary();

console.log(averageSalary);

// Challenge 2: Object Method with Filter
console.log("Challenge 2: Object Method with Filter");
const shop = {
  products: [
    { name: "Radio", price: 230 },
    { name: "Car", price: 4 },
    { name: "bike", price: 100 },
  ],

  getProductsUnderPrice: function (maxPrice) {
    const filterProducts = this.products.filter(
      (product) => product.price > maxPrice
    );
    return filterProducts;
  },
};

const affordableProducts = shop.getProductsUnderPrice(100);
console.log(affordableProducts);

// Challenge 3: Arrow Functions with Objects
console.log("Challenge 3: Arrow Functions with Objects");

const mathOperations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

const addResult = mathOperations.add(2, 3);
console.log(addResult);

// Challenge 5: Filter and ES6 Method Definition
console.log("Challenge 5: Filter and ES6 Method Definition");

/**
 * Create an array of objects called books, where each object represents a book with properties title, author, and rating.
 * Write an arrow function called getTopRatedBooks that takes the books array as input and returns
 * an array containing only the books with a rating of 4 or higher.
 */

const books = {
  book: [
    { title: "Book One", author: "Author One", rating: 5 },
    { title: "Book Two", author: "Author Two", rating: 10 },
    { title: "Book Three", author: "Author Three", rating: 3 },
    { title: "Book Four", author: "Author Four", rating: 4 },
  ],
};

const filterBooks = books.book.filter((book) => book.rating > 4);
console.log(filterBooks);

// Challenge 6: Object Methods with Arrow Functions

/**
 * Create an object called circle with properties radius and pi.Implement two arrow
 * functions as methods inside the circle object: getArea, which returns the
 * area of the circle, and getCircumference, which returns the circumference of the circle.
 */

console.log("Challenge 6: Object Methods with Arrow Functions");

const circle = {
  radius: 10,
  pi: 3.14,
  // getArea: () => this.pi * this.radius,
  getArea: function () {
    return this.pi * this.radius;
  },
  getCircumference: function () {
    return 2 * this.pi * this.radius;
  },
};

console.log((areaOfCircle = circle.getArea()));
console.log((areaOfCircumference = circle.getCircumference()));

// Challenge 7: Chaining Methods and Filter

/**
 * Create an array of numbers. Implement a chain of methods using arrow functions to perform the following operations:
 * 1. Filter out the odd numbers.
 * 2. Double each number.
 * 3. Get the sum of all the numbers.
 */

console.log("Challenge 7: Chaining Methods and Filter");

const chainOfMethods = {
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  oddNumbers: function () {
    const filterOdd = this.numbers.filter(
		(odd) => odd % 2 !== 0
	)
	return filterOdd;
  },
  doubleNumbers: function () {
    this.numbers.forEach(function (element, index) {
      this.numbers[index] = element * 2;
    }, this);
  },
  sumAll: function() {
	let sum = 0;
	this.numbers.forEach( function (element) {
		sum += element
	})
	return sum;
  }
};

console.log(chainOfMethods.oddNumbers());
chainOfMethods.doubleNumbers();
console.log(chainOfMethods.numbers);
console.log(chainOfMethods.sumAll());


