#!/usr/bin/env node

// Problem
/**
 * Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
 * data using a two-dimensional array. Create functions to display the monthly average,
 * a specific week’s average, and all the weeks’ averages.
 */

export class WeeklyTemps {
    public dataStore: number[][];

    public constructor(temperatures: number[][]) {
        this.dataStore = temperatures;
    }

    public add(temperature: number[]): void {
        this.dataStore.push(temperature);
    }

    // Get the sum of temperatures for each week
    private getSum(...temperatures: number[]): number {
        let sum = 0;

        for (const temperature of temperatures) {
            sum += temperature;
        }

        return sum;
    }
}