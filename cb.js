console.log('Start')

function login(email, password) {
	setTimeout(() => {
		console.log('Return userEmail...')
		return { userEmail: email }
	}, 2000)
}

const user = login('AAA@AA.COM', 'AAAA')
console.log(user)

function anotherLogin(email, password, callback) {
	setTimeout(() => {
		console.log('Return form Another userEmail...')
		callback({ userEmail: email })
	}, 2000)
}

const anotherUser = anotherLogin('AAA@AA.COM', 'AAAA', (user) => {
	console.log('Another', user)
})

console.log('End')
