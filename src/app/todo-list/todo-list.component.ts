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

  remove(index: number): void {
    this.todoListService.remove(index);
  }

  edit(todo: Todo): void {
    console.log(todo);
    todo.editable = true;
  }

  update(todo: Todo, newTitle: string): void {
    console.log('update');
    if (!todo.editing) {
      return;
    }
    const title = newTitle.trim();
    // �p�G����J�W�٫h�ק�ƶ��W��
    if (title) {
      todo.setTitle(title);
      todo.editable = false;

    // �p�G�S���W�٫h�R���Ӷ��ݿ�ƶ�
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        this.remove(index);
      }
    }
  }

  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }
}
