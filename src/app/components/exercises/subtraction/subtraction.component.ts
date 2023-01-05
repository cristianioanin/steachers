import { Component } from '@angular/core';
import { MathOperationSignsEnum } from '../../../core/enums';
import { MathOperationBaseComponent } from '../math-operation-base/math-operation-base.component';

@Component({
  selector: 'app-subtraction',
  templateUrl: '../math-operation-base/math-operation-base.component.html',
  styleUrls: [
    '../math-operation-base/math-operation-base.component.css',
    './subtraction.component.css'
  ]
})
export class SubtractionComponent extends MathOperationBaseComponent{
  override maxDigits = 3;
  override operationSign = MathOperationSignsEnum.SUBTRACT;

  override calcResultForCurrentOperands(): number {
    let value = this.operands[0];

    for (let i = 1; i < this.operands.length; ++i) {
      value -= this.operands[i];
    }

    return value;
  }

  override conditionToPass = (value: number) => value >= 0;
}
