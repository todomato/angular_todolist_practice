import { Component, OnInit } from '@angular/core';

// service
import { TodoListService } from './todo-list.service';
// class
import { Todo } from './todo.model';

import { TodoStatusType } from './todo-status-type.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}
  todoStatusType = TodoStatusType;
  private status = TodoStatusType.All;

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
    let list: Todo[] = [];
    switch (this.status) {
      case TodoStatusType.Active:
        list = this.getRemainingList();
        break;
      case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;
      default:
        list = this.todoListService.getList();
        break;
      }
    console.log(list);
    return list;
}

  remove(index: number): void {
    this.todoListService.remove(index);
  }

  edit(todo: Todo): void {
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

  // ���o�������M��
  getRemainingList(): Todo[] {
    return this.todoListService.getWithCompleted(false);
  }

  // ���o�w�����M��
  getCompletedList(): Todo[] {
    return this.todoListService.getWithCompleted(true);
  }

  setStatus(status: number): void {
    this.status = status;
  }

  checkStatus(status: number): boolean {
    return this.status === status;
  }

  removeCompleted(): void {
    this.todoListService.removeCompleted();
  }

  // ���o�Ҧ��M��
  getAllList(): Todo[] {
    return this.todoListService.getList();
  }

  // �P�_�O�_����������
  allCompleted(): boolean {
    return this.getAllList().length === this.getCompletedList().length;
  }

  // �����]�w
  setAllTo(completed: boolean): void {
    this.getAllList().forEach((todo) => {
      todo.setCompleted(completed);
    });
  }
}
