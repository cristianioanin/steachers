import { Component } from '@angular/core';
import { MathOperationSignsEnum } from '../../../core/enums';
import { MathOperationBaseComponent } from '../math-operation-base/math-operation-base.component';

@Component({
  selector: 'app-multiplication',
  templateUrl: '../math-operation-base/math-operation-base.component.html',
  styleUrls: [
    '../math-operation-base/math-operation-base.component.css',
    './multiplication.component.css'
  ]
})
export class MultiplicationComponent extends MathOperationBaseComponent {
  override maxNumber = 10;
  override operationSign = MathOperationSignsEnum.MULTIPLY;

  override calcResultForCurrentOperands(): number {
    return this.operands.reduce((a: number, b: number) => a * b, 1);
  }
}
