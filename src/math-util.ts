export namespace MathUtil {
    export const PI: number = 3.14159;

    export function sum(...values: number[]): number {
        let total = 0;
        for (const value of values) {
            total += value;
        }
        return total;
    }
}
