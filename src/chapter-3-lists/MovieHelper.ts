import { Customer } from "./Customer";
import { List } from "./List";

export class MovieHelper {
    public static checkOut(name: string, movie: string, filmList: List, customerList: List, rentedMovies: List): void {
        // Check if the given list of films contains a given movie
        if (filmList.contains(movie)) {
            // If yes, instantiate a new instance of the customer class passing the given name and movie to the constructor
            const customer: Customer = new Customer(name, movie);
            // Add the created customer to the List of customers
            customerList.append(customer);
            // Add the given movie to the rented movies list [EXERCISE 4]
            rentedMovies.append(movie);
            // Remove the movie that this particular customer has checked out
            filmList.remove(movie);
        } else {
            // Give feedback to the user that the requested movie is not currently available for checkout
            console.log(`${movie} is not available.`);
        }
    }

    public static checkIn(name: string, movie: string, filmList: List, customerList: List, rentedMovies: List): void {
        let validCustomer = false;

        for (customerList.front(); customerList.currentPosition() < customerList.length(); customerList.next()) {
            if ((customerList.getElement().name === name) && (customerList.getElement().movie === movie)) {
                validCustomer = true;
                // Remove Customer from the list of customer rentals
                customerList.remove(customerList.getElement());
            }
        }

        if (validCustomer) {
            // Remove movie from the list of currently rented movies
            rentedMovies.remove(movie);
            // Add the movie to the list of movies available for rent
            filmList.append(movie);
        } else {
            console.log(`${name} did not have ${movie} currently rented.`);
        }
    }
}