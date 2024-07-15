import { TodosService } from './todos.service';
import { Todo } from './todo.model';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAll(): Todo[];
    findOne(id: string): Todo;
    create(createTodoDto: Omit<Todo, 'id'>): Todo;
    update(id: string, updateTodoDto: Partial<Todo>): Todo;
    remove(id: string): void;
}
