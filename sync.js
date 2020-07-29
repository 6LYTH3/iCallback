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

async function getInfo() {
	try {
		const user = await login('AAA@AA.COM', 'AAA')
		console.log(user)
		const email = await getUser(user.userEmail)
		const videos = await getUserVideos(email)
		console.log(videos)
	} catch (err) {
		console.log(err)
	}
}

getInfo()

console.log('End')
