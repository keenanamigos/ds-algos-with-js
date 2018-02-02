import { expect } from "chai";
import { FileHelper } from "../src/chapter-3-lists/FileHelper";

describe("FileHelper", () => {
    describe("createArray", () => {
        it("should return an array that contains each line in the file as an element", () => {
            const mockFile = "The Shawshank Redemption\nThe Godfather\nThe Godfather: Part II";
            const expectedArray: string[] = ["The Shawshank Redemption", "The Godfather", "The Godfather: Part II"];

            expect(FileHelper.createArray(mockFile)).to.deep.equal(expectedArray);
        });
    });
});