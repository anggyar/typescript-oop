describe("Interface Inheritance", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        sayHelloto(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it("should support interface inheritance", () => {
        const person = new Person("Anggyar");
        console.info(person.name);
        person.sayHelloto("Budi");
    });
});
export {};
