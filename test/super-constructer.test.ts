describe("constructor", () => {
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        department: string;

        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    }

    it("should suppor Super constructor", () => {
        const person: Person = new Person("Anggyar");
        console.info(person.name);

        const employee: Employee = new Employee("Budi", "Engineering");
        console.info(employee.name);
    });
});
