#!/usr/bin/env node

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

    public getGPA(): number {
        const numberOfGrades: number = this.grades.length;
        const totalGradePoints: number = this.getTotalGradePoints();

        // Round final value to the nearest tenth
        return Math.round(10 * (totalGradePoints / numberOfGrades)) / 10;
    }

    private getTotalGradePoints(): number {
        let totalGradePoints = 0;

        for (const grade of this.grades) {
            totalGradePoints += grade;
        }

        return totalGradePoints;
    }
}