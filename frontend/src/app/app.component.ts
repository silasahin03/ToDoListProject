import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo.model';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title = 'frontend';
  todos: Todo[] = [];
  newTodoText: string= ''

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

    async loadTasks(): Promise<void> {
      try {
        const data = await firstValueFrom(this.apiService.getAllTasks());
        this.todos = data as Todo[];
      } catch (error) {
        console.error('Failed to load tasks:', error);
      }
    }
  
    async addTodo(): Promise<void> {
      try {
        if (this.newTodoText.trim() !== '') {
          const newTodo: Todo = {
            id: 0, // Bu id API tarafından atanacak
            text: this.newTodoText,
            completed: false
          };
          const createdTodo = await firstValueFrom(this.apiService.addTask(newTodo));
          this.todos.push(createdTodo as Todo);
          this.newTodoText = ''; // Formu temizle
        }
      } catch (error) {
        console.error('Failed to add task:', error);
      }
    }
  
    async toggleCompleted(id: number): Promise<void> {
      try {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
          const updatedTodo = { ...todo, completed: !todo.completed };
          await firstValueFrom(this.apiService.updateTask(id, updatedTodo));
          todo.completed = !todo.completed;
        }
      } catch (error) {
        console.error('Failed to update task:', error);
      }
    }
  
    async deleteTodo(id: number): Promise<void> {
      try {
        await firstValueFrom(this.apiService.deleteTask(id));
        this.todos = this.todos.filter(t => t.id !== id);
      } catch (error) {
        console.error('Failed to delete task:', error);
      }
    }
}