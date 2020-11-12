import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable()

export class TaskService {

    constructor(private http: HttpClient) { }

    getTodoList$: Observable<Task[]> = this.http
        .get<Task[]>('http://localhost:3000/todolist');

    getTodoList(): Observable<Task[]> {
        return this.http
            .get<Task[]>('http://localhost:3000/todolist');
    }

}
