// Run this program with the below command from the root of this project: node_modules/ts-node/dist/bin.js src/chapter-3-lists/videos.ts

import * as fs from "fs";
import { FileHelper } from "./FileHelper";
import { List } from "./List";
import { ListHelper } from "./ListHelper";
import { MovieHelper } from "./MovieHelper";

const file: string = fs.readFileSync("./src/chapter-3-lists/films.txt", "utf-8");
// Return an array of all movies line by line as elements of the array with the extra spaced trimmed
const array: string[] = FileHelper.createArray(file);
// Initialize an empty list
const movieList: List = new List();
// Initialize an empty list
const customers: List = new List();
// Initialize an empty list
const rentedMovies: List = new List();
// Populate the list with each movie from the file
for (const movie of array) {
    movieList.append(movie);
}

console.log("Available movies \n");
ListHelper.displayList(movieList);
MovieHelper.checkOut("Jane Doe", "The Godfather", movieList, customers, rentedMovies);
console.log("\nCustomer rentals: \n");
ListHelper.displayList(customers);
console.log("\nRented Movies: \n");
ListHelper.displayList(rentedMovies);
console.log("------------------------");
MovieHelper.checkIn("Jane Doe", "The Godfather", movieList, customers, rentedMovies);
console.log("Available movies \n");
ListHelper.displayList(movieList);
console.log("\nCustomer rentals: \n");
ListHelper.displayList(customers);
console.log("\nRented Movies: \n");
ListHelper.displayList(rentedMovies);