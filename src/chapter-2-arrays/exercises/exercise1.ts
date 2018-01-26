// Problem
/**
 * Create a grades object that stores a set of student grades in an object.
 * Provide a function for adding a grade and a function for displaying the student’s grade average.
 */

export class Student {
    public grades: number[];

    public constructor(grades: number[]) {
        this.grades = grades;
    }

    public addGrade(grade: number): void {
        this.grades.push(grade);
    }
}