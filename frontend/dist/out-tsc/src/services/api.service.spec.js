import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
describe('ApiService', () => {
    let service;
    let httpMock;
    const apiUrl = 'http://localhost:3000';
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ApiService]
        });
        service = TestBed.inject(ApiService);
        httpMock = TestBed.inject(HttpTestingController);
    });
    afterEach(() => {
        httpMock.verify();
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('should fetch all tasks', () => {
        const dummyTodos = [
            { id: 1, text: 'Test Todo 1', completed: false },
            { id: 2, text: 'Test Todo 2', completed: true }
        ];
        service.getAllTasks().subscribe(todos => {
            expect(todos.length).toBe(2);
            expect(todos).toEqual(dummyTodos);
        });
        const req = httpMock.expectOne(apiUrl);
        expect(req.request.method).toBe('GET');
        req.flush(dummyTodos);
    });
    it('should add a new task', () => {
        const newTodo = { id: 3, text: 'New Todo', completed: false };
        service.addTask(newTodo).subscribe(todo => {
            expect(todo).toEqual(newTodo);
        });
        const req = httpMock.expectOne(apiUrl);
        expect(req.request.method).toBe('POST');
        req.flush(newTodo);
    });
    it('should update a task', () => {
        const updatedTodo = { id: 1, text: 'Updated Todo', completed: true };
        service.updateTask(1, updatedTodo).subscribe(todo => {
            expect(todo).toEqual(updatedTodo);
        });
        const req = httpMock.expectOne(`${apiUrl}/1`);
        expect(req.request.method).toBe('PUT');
        req.flush(updatedTodo);
    });
    it('should delete a task', () => {
        service.deleteTask(1).subscribe(response => {
            expect(response).toBeUndefined();
        });
        const req = httpMock.expectOne(`${apiUrl}/1`);
        expect(req.request.method).toBe('DELETE');
        req.flush(null);
    });
    it('should fetch a task by ID', () => {
        const dummyTodo = [{ id: 1, text: 'Test Todo 1', completed: false }];
        service.getTask(1).subscribe(todo => {
            expect(todo).toEqual(dummyTodo);
        });
        const req = httpMock.expectOne(`${apiUrl}/1`);
        expect(req.request.method).toBe('GET');
        req.flush(dummyTodo);
    });
    it('should fetch the last ID', () => {
        const lastId = 2;
        service.getLastId().subscribe(id => {
            expect(id).toBe(lastId);
        });
        const req = httpMock.expectOne(apiUrl);
        expect(req.request.method).toBe('GET');
        req.flush(lastId);
    });
});
//# sourceMappingURL=api.service.spec.js.map