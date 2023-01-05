import { MathExerciseStateEnum, MathOperationSignsEnum } from '../enums';

export interface IExerciseLogData {
  operands: number[];
  operator: MathOperationSignsEnum;
  result: number;
  state: MathExerciseStateEnum;
}
