describe("Class", () => {
    class Customer {
        constructor() {
            console.info("Hallo, this is from constructor of Customer");
        }
    }

    class Order {}
    it("should supported in typescript", () => {
        const customer: Customer = new Customer();
        const order: Order = new Order();
    });

    it("should can create constructor", () => {
        new Customer();
        new Customer();
    });
});
