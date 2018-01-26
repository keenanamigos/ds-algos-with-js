import { expect } from "chai";
import { Student } from "../src/chapter-2-arrays/exercises/exercise1";

describe("Student", () => {
    describe("addGrade", () => {
        it("should append a grade to the list of grades for a student", () => {
            const student: Student = new Student([90, 85, 67, 81]);
            student.addGrade(91);

            expect(student.grades.length).to.equal(5);
        });
    });
});