function otherFunc() {
	console.log('Hello from another func')
	setTimeout(() => {
		console.log('Wait for me')
	}, 2000)
}

console.log('start')

otherFunc()

console.log('end')
