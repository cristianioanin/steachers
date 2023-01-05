import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HistoryService } from 'src/app/core/services/history.service';
import { MathExerciseStateEnum, MathOperationSignsEnum } from '../../../core/enums';
import { getMaxNumberOfDigitsCount, getRandomNumber } from '../../../core/utils';

@Component({
  selector: 'app-math-operation-base',
  templateUrl: './math-operation-base.component.html',
  styleUrls: ['./math-operation-base.component.css']
})
export class MathOperationBaseComponent implements OnInit {
  readonly ExerciseStateEnum = MathExerciseStateEnum;

  operands: number[] = [];
  operandsCount: number = 2;
  maxDigits: number = 2;
  expectedResult: number | null = null;
  form: FormGroup;
  currentState: MathExerciseStateEnum = MathExerciseStateEnum.NEW;
  attemptStateMap: Map<MathExerciseStateEnum, string> = new Map([
    [MathExerciseStateEnum.NEW, ''],
    [MathExerciseStateEnum.CORRECT, `Corect! 😻`],
    [MathExerciseStateEnum.WRONG, `Greșit! 🙀`]
  ]);
  operationSign: MathOperationSignsEnum = MathOperationSignsEnum.UNDEFINED;

  protected maxNumber: number | null = null;
  protected conditionToPass: ((potentialResultValue: number) => boolean) | null = null;

  constructor(private historyService: HistoryService) {
    this.form = new FormGroup({
      response: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
    this.generateNewExercise();
  }

  protected calcResultForCurrentOperands(): number {
    return NaN;
  };

  validateAttempt(): void {
    const responseValue = Number(this.form.controls['response'].value);

    if (responseValue === this.expectedResult) {
      this.currentState = MathExerciseStateEnum.CORRECT;
    } else {
      this.currentState = MathExerciseStateEnum.WRONG;
    }

    this.historyService.logExercise$.next({
      operands: this.operands,
      operator: this.operationSign,
      result: responseValue,
      state: this.currentState
    });
  }

  generateNewExercise(): void {
    this.operands = [];
    this.form.reset();
    this.currentState = MathExerciseStateEnum.NEW;

    if (this.operandsCount > 1) {
      const maxNumber = this.maxNumber ?? getMaxNumberOfDigitsCount(this.maxDigits);
      let count = this.operandsCount;

      while (count > 0) {
        this.operands.push(getRandomNumber(maxNumber));
        count--;
      }

      const potentialResult = this.calcResultForCurrentOperands();
      console.log('potential res: ', potentialResult);

      if (this.conditionToPass === null || this.conditionToPass(potentialResult)) {
        this.expectedResult = potentialResult;
        return;
      }

      return this.generateNewExercise();
    }
  }
}
