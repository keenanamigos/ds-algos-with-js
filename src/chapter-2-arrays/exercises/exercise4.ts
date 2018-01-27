// Problem
/**
 * Create an object that stores individual letters in an array and has a function for
 * displaying the letters as a single word.
 */

export class Letters {
    public characterArray: string[];

    public constructor(arrayOfChars: string[]) {
        this.characterArray = arrayOfChars;
    }

    public singleString(): string {
        return this.characterArray.join("");
    }
}
