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
}