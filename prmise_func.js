console.log('Start')

function login(email, password) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Return userEmail...')
			resolve({ userEmail: email })
		}, 2000)
	})
}

function getUser(email) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Get user')
			resolve({ user: email })
		}, 2000)
	})
}

function getUserVideos(email) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Get user videos')
			resolve(['video1', 'video2', 'video3'])
		}, 2000)
	})
}

login('AAA@AA.COM', 'AAA')
	.then((user) => {
		console.log(user)
		return getUser(user)
	})
	.then((user) => {
		console.log(user)
		return getUserVideos(user.userEmail)
	})
	.then((video) => {
		console.log(video)
	})

console.log('End')
