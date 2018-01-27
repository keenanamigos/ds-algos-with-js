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

    public averageMonth(): number {
        let temperatureSum = 0;
        let totalMeasuredTemperatures = 0;
        const tempsPerWeek: object = this.getNumberOfTempsPerWeek();
        const weeklyTempKeys: string[] = Object.keys(tempsPerWeek);

        for (const week of weeklyTempKeys) {
            totalMeasuredTemperatures += tempsPerWeek[week];
        }

        for (const week of this.dataStore) {
            temperatureSum += this.getSum(...week);
        }

        return (temperatureSum / totalMeasuredTemperatures);
    }

    public averageWeek(week: number): number {
        const measuredTemps: number = this.dataStore[week - 1].length;
        const temperatureSum: number = this.getSum(...this.dataStore[week - 1]);

        return (temperatureSum / measuredTemps);
    }

    public showAllWeekAverages(): void {
        // Set to 1 to access the 0th index of the dataStore array
        let weekNumber = 1;
        for (const week of this.dataStore) {
            console.log(this.averageWeek(weekNumber).toFixed(3));
            weekNumber++;
        }
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