describe("method Overriding", () => {
    class Employee {
        name: string;
        constructor(name: string) {
            this.name = name;
        }

        sayHelloTo(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    class Manager extends Employee {
        sayHelloTo(name: string): void {
            console.info(
                `Hello ${name}, my name is ${this.name} and I am your manager.`
            );
        }
    }

    it("should support method Overriding", () => {
        const employee: Employee = new Employee("John Doe");
        console.info(employee.name);

        employee.sayHelloTo("Budi");

        const manager: Manager = new Manager("Anggyar");
        console.info(manager.name);
        manager.sayHelloTo("Tyo");
    });

    it("should support super method", () => {
        class Director extends Employee {
            sayHelloTo(name: string): void {
                super.sayHelloTo(name);
                console.info(`I am the Director.`);
            }
        }

        const directr: Director = new Director("Budi");
        directr.sayHelloTo("Anggyar");
    });
});
