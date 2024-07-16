import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { ApiService } from '../services/api.service';
import { firstValueFrom, } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [ApiService]
})
export class AppComponent implements OnInit{
  
  title = 'frontend';
  todos: Todo[] = [];
  newTodoText: string= ''

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
      try {
        this.apiService.getAllTasks().subscribe((results) => {
          if (results && results.length > 0) {
            this.todos.push(...results);
          }
          });
      } catch (error) {
        console.error('Failed to load tasks:', error);
      }
    }
  
  addTodo() {
      try {
        if (this.newTodoText.trim() !== '') {
          this.apiService.getLastId().subscribe(
            (lastId: number) => {
          const newTodo: Todo = {
            id: lastId+1, // Bu id API tarafından atanacak
            text: this.newTodoText,
            completed: false
          };
        
          this.apiService.addTask(newTodo).subscribe(() => {
            this.todos.push(newTodo);
           // Formu temizle
          });
            this.newTodoText = '';
            });
        }
      } catch (error) {
        console.error('Failed to add task:', error);
      }
  }
  
  toggleCompleted(id: number){
      try {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
          const updatedTodo = { ...todo, completed: !todo.completed };
          this.apiService.updateTask(id, updatedTodo);
          todo.completed = !todo.completed;
        }
      } catch (error) {
        console.error('Failed to update task:', error);
      }
    }
  
  deleteTodo(id: number){
      try {
        this.apiService.deleteTask(id);
        this.todos = this.todos.filter(t => t.id !== id);
      } catch (error) {
        console.error('Failed to delete task:', error);
      }
    }
}
