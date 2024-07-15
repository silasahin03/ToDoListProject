import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  create(todo: Omit<Todo, 'id'>): Todo {
    const newTodo = { ...todo, id: this.idCounter++ };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, updatedTodo: Partial<Todo>): Todo {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (!updatedTodo) {
      throw new Error(`Todo with ID ${id} not found.`);
    }
    if (todoIndex >= 0) {
      const existingTodo = this.todos[todoIndex];
      this.todos[todoIndex] = { ...existingTodo, ...updatedTodo };
      return this.todos[todoIndex];
    }
    return null;
  }

  remove(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
