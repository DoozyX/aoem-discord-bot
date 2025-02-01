export class RandomUtils {
    public static intFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public static shuffle(input: any[]): any[] {
        for (let index = input.length - 1; index > 0; index--) {
            const index_ = Math.floor(Math.random() * (index + 1));
            [input[index], input[index_]] = [input[index_], input[index]];
        }
        return input;
    }
}
