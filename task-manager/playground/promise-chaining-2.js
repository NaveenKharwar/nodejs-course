require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('64cfc6284b59e17494f87801').then(() => {
// 	return Task.countDocuments({ completed: false })
// }).then((result) => {
// 	console.log(result)
// }).catch((e) => {
// 	console.log(e)
// })

const deleteTaskAndCount = async (id) => {
	await Task.findByIdAndDelete(id)
	const incompleteTask = await Task.countDocuments( { completed: false} )
	return incompleteTask
}

deleteTaskAndCount('64cfc6db7aece02abb84cb50').then ((result) => {
	console.log('Number of incomplete task: ', result);
}).catch ((e) => {
	console.log('Error:', e);
})
