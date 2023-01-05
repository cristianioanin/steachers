import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IExerciseLogEntry } from '../../core/interfaces';
import { HistoryService } from '../../core/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  history$: Observable<IExerciseLogEntry[]> = this.historyService.log$
    .pipe(takeUntil(this.unsubscribe$))

  constructor(private historyService: HistoryService) { }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
