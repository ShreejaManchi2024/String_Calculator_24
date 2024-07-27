import { Component } from '@angular/core';
import { CalcOperationsService } from 'src/services/calc-operations.service';

@Component({
  selector: 'app-string-calc',
  templateUrl: './string-calc.component.html',
  styleUrls: ['./string-calc.component.scss']
})
export class StringCalcComponent {
  result: number | null = null;
  errorMessage: string | null = null;

  constructor(private Calculator_Operations : CalcOperationsService){}

  calculateSum(numbers: string): void {
    try {
      this.result = this.Calculator_Operations.add(numbers);
      this.errorMessage = null;
    } catch (error) {
      this.result = null;
      this.errorMessage = error.message;
    }
  }
}
