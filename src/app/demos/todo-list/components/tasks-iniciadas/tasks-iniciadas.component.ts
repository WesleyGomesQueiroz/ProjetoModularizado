import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../todo.service';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html',
  styles: []
})
export class TasksIniciadasComponent implements OnInit {

  todolist$: Observable<any[]>

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.todolist$ = this.taskService.getTodoList$;
  }


}
