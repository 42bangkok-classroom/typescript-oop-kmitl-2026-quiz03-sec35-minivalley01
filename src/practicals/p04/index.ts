import { User } from './user'

const user = new User('john_doe', 'secret123')

console.log(user.username)
// john_doe

user.username = 'jane_doe'

console.log(user.username)
// jane_doe

console.log(user.getLoginAttempts())
// 0

console.log(user.login('wrong_password'))
// false

console.log(user.getLoginAttempts())
// 1

console.log(user.login('wrong_password'))
// false

console.log(user.getLoginAttempts())
// 2

console.log(user.login('wrong_password'))
// false

console.log(user.getLoginAttempts())
// 3

console.log(user.login('secret123'))
// true

console.log(user.getLoginAttempts())
// 4

