import { Injectable } from '@angular/core';
import { Observable, scan, Subject } from 'rxjs';
import { MathExerciseStateEnum } from '../enums';
import { IExerciseLogEntry } from '../interfaces';
import { IExerciseLogData } from '../interfaces/exercise-log-data.interface';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  logExercise$: Subject<IExerciseLogData> = new Subject<IExerciseLogData>();
  log$: Observable<IExerciseLogEntry[]> = this.logExercise$.pipe(
    scan((log: IExerciseLogEntry[], data: IExerciseLogData) => {
      return [
        {
          expression: `${data.operands.join(data.operator)} = ${data.result}`,
          isCorrect: data.state === MathExerciseStateEnum.CORRECT
        } as IExerciseLogEntry,
        ...log
      ] as IExerciseLogEntry[];
    }, [])
  );
}
