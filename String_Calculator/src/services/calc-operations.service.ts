import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcOperationsService {
  add(numbers: string): number {
    if (!numbers) return 0;

    let delimiter = /,|\n/; // Default delimiter

    // Check for custom delimiter
    const customDelimiterMatch = numbers.match(/^\/\/(.*)\n/);
    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1].replace(/[\[\]]/g, ''));
        numbers = numbers.replace(customDelimiterMatch[0], '');
    }

    const numArray = numbers.split(delimiter);
    const negatives = [];

    const sum = numArray.reduce((acc, num) => {
        const number = parseInt(num);
        if (isNaN(number)) return acc;
        if (number < 0) negatives.push(number);
        return acc + number;
    }, 0);

    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return sum;
}
}
