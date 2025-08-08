describe("Interface Inheritance", () => {
    interface HasName {
        name: string;
    }

    interface CanSayHello {
        sayHelloto(name: string): void;
    }

    class Person implements HasName, CanSayHello {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHelloto(name: string): void {
            console.info(`Hello ${name}, my name is ${this.name}`);
        }
    }

    it("should support interface inheritance", () => {
        const person: Person = new Person("Anggyar");
        console.info(person.name);

        person.sayHelloto("Budi");
    });
});
