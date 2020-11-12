import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../../todo.service';

@Component({
  selector: 'tasks-finalizadas',
  templateUrl: './tasks-finalizadas.component.html',
  styles: []
})
export class TasksFinalizadasComponent implements OnInit {

  todolist$: Observable<any[]>

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.todolist$ = this.taskService.getTodoList$;
  }

}
