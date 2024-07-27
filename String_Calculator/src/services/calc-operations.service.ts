import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcOperationsService {
  sumNumbers(input: string): { sum: number, warnings: string[] } {
    const { numbers, warnings } = this.sanitizeAndParseNumbers(input);

    // Calculate the sum of the numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);

    return { sum, warnings };
  }

  private sanitizeAndParseNumbers(input: string): { numbers: number[], warnings: string[] } {
    // Replace various delimiters with a common delimiter (e.g., a comma) and trim extra whitespace
    const sanitizedInput = input
      .replace(/[\s\\n\r\f;:.\/|(){}\[\]'"`~@#\$%\^&\*\+\=\<\>\?]+/g, ',') // Replace delimiters with comma
      .replace(/,+/g, ',') // Replace multiple commas with a single comma
      .trim(); // Remove any extra whitespace

    // Split the sanitized input into an array of strings, then parse each string to a number
    const numbers = sanitizedInput.split(',')
      .map(str => parseFloat(str.trim()))
      .filter(num => !isNaN(num)); // Filter out any NaN values

    // Identify any negative numbers and generate warnings
    const warnings = numbers
      .filter(num => num < 0)
      .map(num => `Negative numbers are not allowed: ${num}`);

    return { numbers, warnings };
  }
}
