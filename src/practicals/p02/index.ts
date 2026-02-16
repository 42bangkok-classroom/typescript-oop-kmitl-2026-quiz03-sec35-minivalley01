import { Person } from './person'

const person = new Person()

person.firstname = 'John'
person.lastname = 'Doe'
person.setAge(25)

console.log(person.getFullName())
// John Doe

console.log(person.getAge())
// 25

console.log(Person.COUNTRY)
// Thailand   (หรือค่าคงที่ที่กำหนดเอง)
