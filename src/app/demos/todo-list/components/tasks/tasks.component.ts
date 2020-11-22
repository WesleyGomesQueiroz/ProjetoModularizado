import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { TaskService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html',
  styles: []
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>
  subscription: Subscription;

  constructor(private taskService: TaskService, private store: Store) { }

  ngOnInit() {
    this.todolist$ = this.store.getTodoList()
      .pipe(
        map(todolist => todolist.filter(task => !task.iniciado && !task.finalizado)));

    this.subscription = this.taskService.getTodoList$.subscribe();
  }

  onToggle(event) {
    this.taskService.toggle(event);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
