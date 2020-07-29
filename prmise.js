const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Got a user')
		// resolve({ user: 'Blythe' })
		reject(new Error('User not logged in'))
	}, 2000)
})

promise
	.then((user) => {
		console.log(user)
	})
	.catch((error) => {
		console.log(error.message)
	})
