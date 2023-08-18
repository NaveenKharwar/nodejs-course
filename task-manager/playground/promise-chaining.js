require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('64cfbbe86d65473fb3a43e34', { age: 1 }).then((user) => {
// 	console.log(user)
// 	return  User.countDocuments({ age: 1 })
// }).then((result) => {
// 	console.log(result)
// }).catch((e) => {
// 	console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
	const user = await User.findByIdAndUpdate(id, { age })
	const count = await User.countDocuments({ age })
	return user + count
}

updateAgeAndCount('64cfa85b34eacf7411fe1054', 10).then(( count) => {
	console.log(count);
}).catch((e) => {
	console.log('Error:', e);
})