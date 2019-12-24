import { Component, OnInit } from '@angular/core';

// service
import { TodoListService } from './todo-list.service';
// class
import { Todo } from './todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
  }

  addTodo(inputRef: HTMLInputElement): void {
    const todo = inputRef.value.trim();
    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = '';
    }
  }

  getList(): Todo[] {
    return this.todoListService.getList();
  }
  // addTodo(inputRef: HTMLInputElement): void {
  //   console.log(inputRef.value);
  //   inputRef.value = '';
  // }

}
