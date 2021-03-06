import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { ThrowStmt } from '@angular/compiler';

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
    // 避免傳入的 title 是無效值或空白字串，稍微判斷一下
    if (title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

  remove(index: number): void{
    this.list.splice(index, 1);
  }

  getWithCompleted(completed: boolean): Todo[]{
    return this.list.filter(todo => todo.done === completed);
  }
  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }
}
