class Person {

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greeting() {
        `my name is ${this.name}, and i am ${this.age}`
    }

}

// const person = {
//
//     name: 'John Doe',
//     age: 30
//
// }

module.exports = Person