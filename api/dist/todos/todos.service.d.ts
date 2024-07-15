import { Todo } from './todo.model';
export declare class TodosService {
    private todos;
    private idCounter;
    findAll(): Todo[];
    findOne(id: number): Todo;
    create(todo: Omit<Todo, 'id'>): Todo;
    update(id: number, updatedTodo: Partial<Todo>): Todo;
    remove(id: number): void;
}
