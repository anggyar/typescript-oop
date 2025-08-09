describe("constructor", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
    }
    it("should suppor Super constructor", () => {
        const person = new Person("Anggyar");
        console.info(person.name);
        const employee = new Employee("Budi", "Engineering");
        console.info(employee.name);
    });
});
export {};
