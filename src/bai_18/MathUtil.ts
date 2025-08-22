export class MathUtil {
    static add(num1: number, num2: number): number {
        return num1 + num2;
    }

    static substract(num1: number, num2: number): number {
        return num1 - num2;
    }

    static multiply(num1: number, num2: number): number {
        return num1 * num2;
    }

    static divide(num1: number, num2: number): number {
        if(num2 === 0) throw new Error('num2 phải khác 0')
        return num1 / num2;
    }
}