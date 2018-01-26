// Problem
/**
 * Store a set of words in an array and display the contents both forward and backward.
 */

 export class Words {
     public words: string[];

     public constructor(words: string[]) {
         this.words = words;
     }

     public printArray(): string[] {
         return this.words;
     }

     public reverse(): string[] {
         return this.words.reverse();
     }
 }