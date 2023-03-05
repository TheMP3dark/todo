import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todoItem } from 'src/app/models/todo.models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem: todoItem | undefined;
  @Output() toggleReminder = new EventEmitter<todoItem>();
  @Output() deleteNote = new EventEmitter<todoItem>();

  private setReminder = (item: todoItem) => {
    this.toggleReminder.emit({...item, setReminder: !item.setReminder});
  };

  public onTodoItemDoubleClick = (item: todoItem) => {
    this.setReminder(item);
  };

  public onDeleteNote = (item: todoItem) => {
    this.deleteNote.emit(item);
  }

  constructor() {}

  ngOnInit(): void {}
}
