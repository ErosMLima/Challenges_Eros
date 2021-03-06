class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName 
	}
}

const me = new Student('Eros', 'Lima')

console.log(me)// Object { firstName: "Eros", lastName: "Lima" }