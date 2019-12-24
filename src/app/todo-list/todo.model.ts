export class Todo {
  /**
   *
   */
  constructor(title: string) {
    this.title = title || '';
  }
  private title = '';
  private completed = false;

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
}
