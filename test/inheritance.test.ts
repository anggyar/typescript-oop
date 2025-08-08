describe("Inheritance", () => {
    // Parent class
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {}

    class Director extends Manager {}

    it("should support inheritance class", () => {
        const employee: Employee = new Employee("John Doe");
        console.info(employee.name);

        const manager: Manager = new Manager("Jane Smith");
        console.info(manager.name);

        const director: Director = new Director("Alice Johnson");
        console.info(director.name);
    });
});
