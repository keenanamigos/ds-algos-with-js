// List implementation

export class List {
    // Properties
    public listSize = 0;
    public position = 0;
    public dataStore: any[] = []; // Initializes an empty array to store list elements

    /* Methods */

    // Remove all elements from the List
    public clear(): void {
        delete this.dataStore;

        this.dataStore = [];
        this.listSize = 0;
        this.position = 0;
    }

    // Appends an element to the list at the next available position which will be the end of the list
    public append(element: any): void {
        this.dataStore[this.listSize++] = element;
        // After the element is appended, listSize is incremented by 1
    }

    // Find a given element in the list and return its position
    public find(element: any): number {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                // Return the position at which the element was found
                return i;
            }
        }
        // Element was not found in the list
        return -1;
    }

    // Remove an element at a given positon
    public remove(element: any): boolean {
        const position: number = this.find(element);

        if (position !== -1) {
            // Remove this single element from the list if it was found during the lookup
            this.dataStore.splice(position, 1);
            // Decrement the size of the list to account for the now removed element
            --this.listSize;
            // Signify the element was successfully removed from the list
            return true;
        }
        // Element was not found in the list
        return false;
    }

    // Return the current length of the List
    public length(): number {
        return this.dataStore.length;
    }

    // View the elements in the list
    public toString(): any[] {
        return this.dataStore;
    }

    // Insert a given element into the list at a specific position
    public insert(newElement: any, elementInList: any): boolean {
        const insertPosition: number = this.find(elementInList);

        if (insertPosition === -1) {
            // Element was not found in the list
            return false;
        }

        // Add the newElement after the specified elementInList
        this.dataStore.splice(insertPosition + 1, 0, newElement);
        // Increment the size of the list to account for the newly added element
        ++this.listSize;
        // Signify the element was successfully added to the list
        return true;
    }

    // Determines if a given element is in the list
    public contains(element: any): boolean {
        for (const listElement of this.dataStore) {
            if (listElement === element) {
                return true;
            }
        }
        // List does not contain the given element
        return false;
    }

    public getElement(): any {
        return this.dataStore[this.position];
    }

    /* Traversal Methods */
    public front(): void {
        this.position = 0;
    }

    public end(): void {
        // -1 because the count starts from 0
        this.position = (this.listSize - 1);
    }

    public previous(): void {
        // Check first that this isn't being called on the first element in the list
        if (this.position > 0) {
            --this.position;
        } else {
            throw new Error(`Position: ${this.position} is the first element of the list.`);
        }
    }

    public next(): void {
        const lastElement: number = (this.listSize - 1);

        if (this.position < lastElement) {
            ++this.position;
        } else {
            throw new Error(`Position: ${this.position} is the last element of the list.`);
        }
    }

    public currentPosition(): number {
        return this.position;
    }

    public moveTo(position: number): void {
        const lastElement: number = (this.listSize - 1);

        if (position < lastElement && position >= 0) {
            this.position = position;
        } else {
            throw new Error(`Invalid value. Position given is not between 0 and ${lastElement}.`);
        }
    }
}