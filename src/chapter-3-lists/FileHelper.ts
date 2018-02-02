export class FileHelper {
    public static createArray(file: string): string[] {
        const array: string[] = file.split("\n");

        for (const line of array) {
            line.trim();
        }

        return array;
    }
}