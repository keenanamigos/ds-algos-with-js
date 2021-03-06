import { expect } from "chai";
import { List } from "../src/chapter-3-lists/List";

describe("List", () => {
    const names: List = new List();
    names.append("Clayton");
    names.append("Raymond");
    names.append("Cynthia");
    names.append("Jennifer");
    names.append("Bryan");
    names.append("Danny");

    describe("front", () => {
        it("should move to the first element in the list", () => {
            names.front();
            expect(names.getElement()).to.equal("Clayton");
        });
    });

    describe("end", () => {
        it("should move to the end of the list", () => {
            names.end();
            expect(names.getElement()).to.equal("Danny");
        });
    });

    describe("next", () => {
        it("should move to the next element in the list", () => {
            names.front();
            names.next();
            expect(names.getElement()).to.equal("Raymond");
        });

        it("should throw an error when trying to access an element past the end of the list", () => {
            names.end();
            expect(names.next.bind(names.next)).to.throw(Error, `Position: ${this.position} is the last element of the list.`);
        });
    });

    describe("append", () => {
        it("should add a new element to the end of the list", () => {
            names.append("Gerald");
            names.end();
            expect(names.getElement()).to.equal("Gerald");
        });
    });

    describe("previous", () => {
        it("should move to the previous element in the list", () => {
            names.front();
            names.next();
            names.next();
            names.next();
            names.previous();
            expect(names.getElement()).to.equal("Cynthia");
        });

        it("should throw an error when trying to access an element before the beginning of the list", () => {
            names.front();
            expect(names.previous.bind(names.previous)).to.throw(Error, `Position: ${this.position} is the first element of the list.`);
        });
    });

    describe("moveTo", () => {
        it("should move to the element at a given position", () => {
            const newPosition = 4;
            names.moveTo(newPosition);
            expect(names.getElement()).to.equal("Bryan");
        });

        it("should throw an error when trying to access a position beyond the last element in the list", () => {
            const newPosition = 24;
            expect(names.moveTo.bind(names.moveTo, newPosition)).to.throw(Error, `Invalid value. Position given is not between 0 and ${this.listSize - 1}.`);
        });

        it("should throw an error when trying to access a position before the first element in the list", () => {
            const newPosition = -4;
            expect(names.moveTo.bind(names.moveTo, newPosition)).to.throw(Error, `Invalid value. Position given is not between 0 and ${this.listSize - 1}.`);
        });
    });

    describe("currentPosition", () => {
        it("should return the current position of 1", () => {
            names.front();
            names.next();
            expect(names.currentPosition()).to.equal(1);
        });
    });

    describe("contains", () => {
        it("should return true if the list contains the given element", () => {
            const element = "Cynthia";
            expect(names.contains(element)).to.equal(true);
        });

        it("should return false if the list does not contain the given element", () => {
            const element = "Jackson";
            expect(names.contains(element)).to.equal(false);
        });
    });

    describe("insert", () => {
        it("should insert the new element after the given element", () => {
            const elementInList = "Cynthia";
            const newElement = "Jackson";
            expect(names.insert(newElement, elementInList)).to.equal(true);
        });

        it("should return false if the given element cannot be found in the list", () => {
            const elementInList = "Rhino";
            const newElement = "Erickson";
            expect(names.insert(newElement, elementInList)).to.equal(false);
        });
    });

    describe("remove", () => {
        it("should remove the given element from the list", () => {
            const element = "Danny";
            expect(names.remove(element)).to.equal(true);
        });

        it("should return false if the given element cannot be found in the list", () => {
            const element = "Bryson";
            expect(names.remove(element)).to.equal(false);
        });
    });

    /* Will clear the list and should always be the last test */
    describe("clear", () => {
        it("should clear the contents of the list", () => {
            names.clear();
            expect(names.dataStore.length).to.equal(0);
        });
    });
});