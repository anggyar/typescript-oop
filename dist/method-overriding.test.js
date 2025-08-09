describe("method Overriding", () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
        sayHelloTo(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHelloTo(name) {
            console.info(`Hello ${name}, my name is ${this.name} and I am your manager.`);
        }
    }
    it("should support method Overriding", () => {
        const employee = new Employee("John Doe");
        console.info(employee.name);
        employee.sayHelloTo("Budi");
        const manager = new Manager("Anggyar");
        console.info(manager.name);
        manager.sayHelloTo("Tyo");
    });
    it("should support super method", () => {
        class Director extends Employee {
            sayHelloTo(name) {
                super.sayHelloTo(name);
                console.info(`I am the Director.`);
            }
        }
        const directr = new Director("Budi");
        directr.sayHelloTo("Anggyar");
    });
});
export {};
