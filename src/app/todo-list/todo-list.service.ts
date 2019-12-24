import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  constructor() { }
  private list: Todo[] = [];

  getList(): Todo[] {
    return this.list;
  }

  add(title: string): void {
    // �קK�ǤJ�� title �O�L�ĭȩΪťզr��A�y�L�P�_�@�U
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

}
