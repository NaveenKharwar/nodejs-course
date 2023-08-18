const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b)
		}, 2000)
	})
}

// add(1, 2).then((sum) => {
// 	console.log(sum)

// 	add(3, 5).then((sum) => {
// 		console.log(sum)
// 	}).catch((e) => {
// 		console.log(e)
// 	})
// }).catch((e) => {
// 	console.log(e)
// })

add(1, 1)
	.then((sum) => {
		console.log(sum)
		return add(4, 4)
	}).then((sum2) => {
		console.log(sum2)
		return add(9, 9)
	}).then((sum3) => {
		console.log(sum3)
	}).catch((e) => {
		console.log(e)
	})