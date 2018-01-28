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

    describe.only("previous", () => {
        it("should move to the previous element in the list", () => {
            names.front();
            names.next();
            names.next();
            names.next();
            names.previous();
            expect(names.getElement()).to.equal("Cynthia");
        });
    });
});