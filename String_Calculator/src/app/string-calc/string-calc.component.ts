import { Component } from '@angular/core';
import { CalcOperationsService } from 'src/services/calc-operations.service';

@Component({
  selector: 'app-string-calc',
  templateUrl: './string-calc.component.html',
  styleUrls: ['./string-calc.component.scss']
})
export class StringCalcComponent {
  input: string = '';
  result: number = 0;
  warnings: string[] = [];
  showResult: boolean = false;

  constructor(private calculatorOperations: CalcOperationsService) {}
  
  calculate(): void {
    const { sum, warnings } = this.calculatorOperations.sumNumbers(this.input);
    this.result = sum;
    this.warnings = warnings;
    this.showResult = warnings.length === 0; // Show result only if there are no warnings
  }

}
