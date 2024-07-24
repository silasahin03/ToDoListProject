import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000';
    }
    getAllTasks() {
        return this.http.get(`${this.apiUrl}`);
    }
    addTask(newTask) {
        return this.http.post(`${this.apiUrl}`, newTask);
    }
    updateTask(taskId, updatedTask) {
        return this.http.put(`${this.apiUrl}/${taskId}`, updatedTask);
    }
    deleteTask(taskId) {
        return this.http.delete(`${this.apiUrl}/${taskId}`);
    }
    getTask(taskId) {
        return this.http.get(`${this.apiUrl}/${taskId}`);
    }
    getLastId() {
        return this.http.get(`${this.apiUrl}`);
    }
};
ApiService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map