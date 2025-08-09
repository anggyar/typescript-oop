var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
describe("Properties", () => {
    class Customer {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        sayHelloTo(name) {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }
    it("should can have properties in typescript", () => __awaiter(void 0, void 0, void 0, function* () {
        const customer = new Customer(1, "John Doe");
        customer.age = 30; // Optional property
        console.info(customer);
    }));
    it("should have method", () => {
        const customer = new Customer(1, "Anggyar");
        customer.sayHelloTo("Budi");
    });
});
export {};
