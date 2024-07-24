import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
let AppComponent = class AppComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.title = 'frontend';
        this.todos = [];
        this.newTodoText = '';
    }
    ngOnInit() {
        this.loadTasks();
    }
    loadTasks() {
        try {
            this.apiService.getAllTasks().subscribe((results) => {
                if (results && results.length > 0) {
                    this.todos.push(...results);
                }
            });
        }
        catch (error) {
            console.error('Failed to load tasks:', error);
        }
    }
    addTodo() {
        try {
            if (this.newTodoText.trim() !== '') {
                this.apiService.getLastId().subscribe((lastId) => {
                    const newTodo = {
                        id: lastId + 1,
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
        }
        catch (error) {
            console.error('Failed to add task:', error);
        }
    }
    toggleCompleted(id) {
        try {
            const todo = this.todos.find(t => t.id === id);
            if (todo) {
                const updatedTodo = { ...todo, completed: !todo.completed };
                this.apiService.updateTask(id, updatedTodo);
                todo.completed = !todo.completed;
            }
        }
        catch (error) {
            console.error('Failed to update task:', error);
        }
    }
    deleteTodo(id) {
        try {
            this.apiService.deleteTask(id);
            this.todos = this.todos.filter(t => t.id !== id);
        }
        catch (error) {
            console.error('Failed to delete task:', error);
        }
    }
    getTodoById() {
        try {
            if (this.todoId !== undefined) {
                this.apiService.getTask(this.todoId).subscribe((results) => {
                    if (results && results.length > 0) {
                        this.todos.push(...results);
                    }
                });
            }
        }
        catch (error) {
            console.error('Failed to fetch todo by ID:', error);
        }
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
        providers: [ApiService]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map