import { Component } from '@angular/core';
import { MathOperationSignsEnum } from '../../../core/enums';
import { MathOperationBaseComponent } from '../math-operation-base/math-operation-base.component';

@Component({
  selector: 'app-division',
  templateUrl: '../math-operation-base/math-operation-base.component.html',
  styleUrls: [
    '../math-operation-base/math-operation-base.component.css',
    './division.component.css'
  ]
})
export class DivisionComponent extends MathOperationBaseComponent {
  override maxNumber = 100;
  override operationSign = MathOperationSignsEnum.DIVIDE;

  override calcResultForCurrentOperands(): number {
    let value = this.operands[0];

    for (let i = 1; i < this.operands.length; ++i) {
      value /= this.operands[i];
    }

    return value;
  }

  override conditionToPass = (value: number) => this.operands[1] !== 0 && value === parseInt(value.toString());
}
