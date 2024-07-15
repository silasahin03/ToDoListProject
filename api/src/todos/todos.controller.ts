import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Todo {
    return this.todosService.findOne(Number(id));
  }

  @Post()
  create(@Body() createTodoDto: Omit<Todo, 'id'>): Todo {
    return this.todosService.create(createTodoDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoDto: Partial<Todo>): Todo {
    return this.todosService.update(Number(id), updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    this.todosService.remove(Number(id));
  }
}
