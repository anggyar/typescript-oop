describe("Properties", () => {
    class Customer {
        name: String;
        readonly id: number;
        age?: number;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }

        sayHelloTo(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it("should can have properties in typescript", async () => {
        const customer = new Customer(1, "John Doe");
        customer.age = 30; // Optional property

        console.info(customer);
    });

    it("should have method", () => {
        const customer = new Customer(1, "Anggyar");
        customer.sayHelloTo("Budi");
    });
});
