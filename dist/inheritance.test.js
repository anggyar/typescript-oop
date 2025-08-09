describe("Inheritance", () => {
    // Parent class
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class Director extends Manager {
    }
    it("should support inheritance class", () => {
        const employee = new Employee("John Doe");
        console.info(employee.name);
        const manager = new Manager("Jane Smith");
        console.info(manager.name);
        const director = new Director("Alice Johnson");
        console.info(director.name);
    });
});
export {};
