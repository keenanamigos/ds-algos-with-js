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

    describe("getGPA", () => {
        it("should return an accurate Grade Point Average", () => {
            const student: Student = new Student([90, 77, 55, 95, 95, 93, 91, 98, 85, 87, 84, 83]);
            student.addGrade(80);
            student.addGrade(84);
            student.addGrade(78);

            const GPA: number = student.getGPA();
            expect(GPA).to.equal(85);
        });
    });
});