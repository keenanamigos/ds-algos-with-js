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

    // Returns an object with a key for each week and a value representing the number of temperatures
    private getNumberOfTempsPerWeek(): object {
        const numberOfTemps = {};
        const monthOfTemps: number[][] = this.dataStore;

        for (let i = 1; i <= monthOfTemps.length; i++) {
            // Each i is a new 'week'
            numberOfTemps[`Week${i}`] = monthOfTemps[i - 1].length;
        }

        return numberOfTemps;
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