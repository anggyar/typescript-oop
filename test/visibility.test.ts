describe("Visibility", () => {
    class Counter {
        // private counter: number = 0;
        protected counter: number = 0;

        public increment(): void {
            this.counter++;
        }

        public getCounter(): number {
            return this.counter;
        }
    }

    class DoubleCounter extends Counter {
        public increment(): void {
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
        const counter: DoubleCounter = new DoubleCounter();
        counter.increment();
        counter.increment();
        counter.increment();

        console.info(counter.getCounter());
    });
});
