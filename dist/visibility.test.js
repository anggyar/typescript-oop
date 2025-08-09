describe("Visibility", () => {
    class Counter {
        constructor() {
            // private counter: number = 0;
            this.counter = 0;
        }
        increment() {
            this.counter++;
        }
        getCounter() {
            return this.counter;
        }
    }
    class DoubleCounter extends Counter {
        increment() {
            this.counter += 2;
        }
    }
    it("should support private", () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });
    it("should double increment", () => {
        const counter = new DoubleCounter();
        counter.increment();
        counter.increment();
        counter.increment();
        console.info(counter.getCounter());
    });
});
export {};
