describe("Parameter Properties", () => {
    class Person {
        // name: string; -> cara lama
        constructor(public name: string) {
            // this.name = name; -> cara lama
        }
    }

    it("should support", () => {
        const person = new Person("Anggyar");

        console.info(person.name);

        person.name = "Budi";
        console.info(person.name);
    });
});
