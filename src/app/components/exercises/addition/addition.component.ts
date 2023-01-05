import { Component } from '@angular/core';
import { MathOperationSignsEnum } from '../../../core/enums';
import { MathOperationBaseComponent } from '../math-operation-base/math-operation-base.component';

@Component({
  selector: 'app-addition',
  templateUrl: '../math-operation-base/math-operation-base.component.html',
  styleUrls: [
    '../math-operation-base/math-operation-base.component.css',
    './addition.component.css'
  ]
})
export class AdditionComponent extends MathOperationBaseComponent {
  override maxDigits = 3;
  override operationSign = MathOperationSignsEnum.ADD;

  override calcResultForCurrentOperands(): number {
    return this.operands.reduce((a: number, b: number) => a + b, 0);
  }

  override conditionToPass = (value: number) => value < 1001;
}
