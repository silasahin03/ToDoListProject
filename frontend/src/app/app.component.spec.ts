import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiService } from '../services/api.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  const mockTodos = [
    { id: 1, text: 'Test Todo 1', completed: false },
    { id: 2, text: 'Test Todo 2', completed: true },
  ];

  beforeEach(waitForAsync(() => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getAllTasks', 'getLastId', 'addTask', 'updateTask', 'deleteTask', 'getTask']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should load tasks on initialization', waitForAsync(() => {
    apiService.getAllTasks.and.returnValue(of(mockTodos));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.todos.length).toBe(2);
    expect(component.todos).toEqual(mockTodos);
  }));

  it('should add a new todo', waitForAsync(() => {
    const newTodo = { id: 3, text: 'New Todo', completed: false };
    apiService.getLastId.and.returnValue(of(2));
    apiService.addTask.and.returnValue(of(newTodo));

    component.newTodoText = 'New Todo';
    component.addTodo();

    fixture.detectChanges();

    expect(component.todos.length).toBe(1);
    expect(component.todos[0].text).toBe('New Todo');
  }));

  it('should toggle todo completion status', waitForAsync(() => {
    apiService.updateTask.and.returnValue(of({ ...mockTodos[0], completed: true }));
    component.todos = [...mockTodos];
    component.toggleCompleted(1);
    fixture.detectChanges();
    expect(component.todos[0].completed).toBe(true);
  }));

  it('should delete a todo', waitForAsync(() => {
    apiService.deleteTask.and.returnValue(of(void 0));
    component.todos = [...mockTodos];
    component.deleteTodo(1);
    fixture.detectChanges();
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].id).toBe(2);
  }));

  it('should get a todo by ID', waitForAsync(() => {
    apiService.getTask.and.returnValue(of([mockTodos[0]]));
    component.todoId = 1;
    component.getTodoById();
    fixture.detectChanges();
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].id).toBe(1);
  }));
});
