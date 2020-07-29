console.log('Start')
const yt = new Promise((resolve) => {
	setTimeout(() => {
		console.log('getting youtube data')
		resolve({ videos: ['v1', 'v2'] })
	}, 5000)
})

const fb = new Promise((resolve) => {
	setTimeout(() => {
		console.log('getting facebook data')
		resolve({ user: 'AAA' })
	}, 2000)
})

Promise.all([yt, fb]).then((result) => console.log(result))

console.log('End')
