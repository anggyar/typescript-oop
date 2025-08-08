describe("polymorphism", () => {
    class Employee {
        constructor(public name: string) {}
    }
    class Manager extends Employee {}
    class VicePresident extends Manager {}

    function sayHelloTo(employee: Employee): void {
        console.info(`Hello ${employee.name}`);
    }
    it("should support", () => {
        let employee: Employee = new Employee("Anggyar");
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
