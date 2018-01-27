import { expect } from "chai";
import { Student } from "../src/chapter-2-arrays/exercises/exercise1";
import { Words } from "../src/chapter-2-arrays/exercises/exercise2";
import { WeeklyTemps } from "../src/chapter-2-arrays/exercises/exercise3";

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

describe("Words", () => {
    describe("printArray", () => {
        it("should print the internal array", () => {
            const words: Words = new Words(["How", "Now", "Brown", "Cow"]);
            expect(words.printArray()).to.deep.equal(["How", "Now", "Brown", "Cow"]);
        });
    });

    describe("reverse", () => {
        it("should print the internal array in reverse order", () => {
            const words: Words = new Words(["How", "Now", "Brown", "Cow"]);
            expect(words.reverse()).to.deep.equal(["Cow", "Brown", "Now", "How"]);
        });
    });
});

describe("WeeklyTemps", () => {
    describe("add", () => {
        it("should add a new week of temperatures to the data store", () => {
            const monthlyTemps: number[][] = [
                [90, 87, 78, 85, 83, 82, 80],
                [87, 82, 75, 70, 77, 90, 89],
                [80, 70, 73, 87, 83, 76, 65],
            ];

            const Temps: WeeklyTemps = new WeeklyTemps(monthlyTemps);
            Temps.add([86, 80, 75, 68, 69, 84, 77]);

            expect(Temps.dataStore.length).to.equal(4);
        });
    });

    describe("averageMonth", () => {
        it("should return the average temperature for a given month", () => {
            const monthlyTemps: number[][] = [
                [90, 87, 78, 85, 83, 82, 80],
                [87, 82, 75, 70, 77, 90, 89],
                [80, 70, 73, 87, 83, 76, 65],
                [76, 70, 70, 60, 63, 81, 71]
            ];

            const Temps: WeeklyTemps = new WeeklyTemps(monthlyTemps);
            expect(Temps.averageMonth().toFixed(3)).to.equal("77.857");
        });
    });

    describe("averageWeek", () => {
        it("should return the average temperature for a given week", () => {
            const monthlyTemps: number[][] = [
                [90, 87, 78, 85, 83, 82, 80],
                [87, 82, 75, 70, 77, 90, 89],
                [80, 70, 73, 87, 83, 76, 65],
                [76, 70, 70, 60, 63, 81, 71]
            ];

            const Temps = new WeeklyTemps(monthlyTemps);
            expect(Temps.averageWeek(3).toFixed(3)).to.equal("76.286");
        });
    });
});