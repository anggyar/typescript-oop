describe("Instance of", () => {
    class Employee {
    }
    class Manager {
    }
    const budi = new Employee();
    const anggyar = new Manager();
    it("should have problem using typeof", () => {
        console.info(typeof budi); // "object"
        console.info(typeof anggyar); // "object"
    });
    it("shuold support instanceof", () => {
        expect(budi instanceof Employee).toBe(true);
        expect(budi instanceof Manager).toBe(false);
        expect(anggyar instanceof Manager).toBe(true);
        expect(anggyar instanceof Employee).toBe(false);
    });
});
export {};
