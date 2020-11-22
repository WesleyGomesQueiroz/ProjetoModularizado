import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TodoComponent } from './todo.component';
import { TaskService } from './todo.service';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { Store } from './todo.store';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
        TaskService,
        Store
    ],
    declarations: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        TodoListComponent,
        TasksComponent
    ],
    exports: [
        TodoComponent,
        TasksFinalizadasComponent,
        TasksIniciadasComponent,
        TasksComponent,
        TodoListComponent
    ]
})

export class TodoModule { }