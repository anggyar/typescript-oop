describe("Relationship", () => {
    class Person {
        constructor(name) {
            this.name = name;
        }
    }
    class Customer {
        constructor(name) {
            this.name = name;
        }
    }
    it("should support", () => {
        const person = new Customer("Anggyar");
        console.info(person);
    });
});
export {};
