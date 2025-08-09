describe("Getter and Setter", () => {
    class Customer {
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return "Empty";
            }
        }
        set name(value) {
            if (value !== "") {
                this._name = value;
            }
        }
    }
    it("should supported in typescript", () => {
        const customer = new Customer();
        console.info(customer.name);
        customer.name = "John Doe";
        console.info(customer.name);
        customer.name = "";
        console.info(customer.name);
    });
});
export {};
