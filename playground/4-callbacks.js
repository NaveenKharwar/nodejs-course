// function addNumbers(num1, num2, callback) {
// 	// Simulate an asynchronous operation using setTimeout
// 	setTimeout(() => {
// 	  const sum = num1 + num2;
// 	  callback(sum); // Pass the result to the callback function
// 	}, 1000); // Simulate a 1-second delay for the addition
//   }



// //   (result) => {
// // 	console.log("The sum is:", result);
// //   }
//   addNumbers(5, 10, (result) => {
// 	console.log("The sum is:", result)
//   });
//   console.log("Performing addition...");







//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


function add (a, b, callback) {
	setTimeout (() => {
		const sum = a + b;
		callback(sum)
	}, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})