class Student {
	constructor(firstName, lastName) {
		this.firstName = firstName 
		this.lastName = lastName
	}

	static EnrollStudents() {
		return 'Enrolling'
	}
}

const me = new Student('Eros', 'Lima')

class Point {
	constructor(x, y) {
		this.x = x
		this.y = y  
	}

	static distance(a, b) {
		const dx = a.x - b.x 
		const dy = a.y - b.y

		return Math.hypot(dx, dy)
	}
} 

const p1 = new Points(5,5)
const p2 = new Points(10,10)

console.log(Point.distance(p1, p2))