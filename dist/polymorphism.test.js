describe("polymorphism", () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePresident extends Manager {
    }
    function sayHelloTo(employee) {
        if (employee instanceof VicePresident) {
            const vicePresident = employee;
            console.info(`Hello Vice President ${vicePresident.name}`);
        }
        else if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello Manager ${manager.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    it("should support", () => {
        let employee = new Employee("Anggyar");
        console.info(employee);
        employee = new Manager("Anggyar");
        console.info(employee);
        employee = new VicePresident("Anggyar");
        console.info(employee);
    });
    it("should support polymorphism", () => {
        sayHelloTo(new Employee("Anggyar"));
        sayHelloTo(new Manager("Budi"));
        sayHelloTo(new VicePresident("Tyo"));
    });
});
export {};
