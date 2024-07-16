import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../app/todo.model'; // Diyelim ki Todo modeli bu dosyada tanımlı
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Docker Compose'da tanımlanan servis adı ve portu

  constructor(private http: HttpClient) {}

  getAllTasks(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}`);
  }

  addTask(newTask: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.apiUrl}`, newTask);
  }

  updateTask(taskId: number, updatedTask: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${taskId}`, updatedTask);
  }

  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${taskId}`);
  }

  getTask(taskId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiUrl}/${taskId}`);
  }
  getLastId(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}`);
  }
}
