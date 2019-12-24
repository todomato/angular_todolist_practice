export class Todo {
  /**
   *
   */
  constructor(title: string) {
    this.title = title || '';
  }
  private title = '';
  private completed = false;
  private editMode = false;

  get done(): boolean {
    return this.completed;
  }

  getTitle(): string {
    return this.title;
  }

  toggleCompletion(): void {
    console.log(this.completed)
    this.completed = !this.completed;
  }

  get editing(): boolean {
    return this.editMode;
  }

  set editable(bl: boolean) {
    this.editMode = bl;
  }

  setTitle(title: string): void {
    this.title = title;
  }
}
