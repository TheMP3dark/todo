import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { todoItem } from 'src/app/models/todo.models';

import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  public fetchedItems$: Observable<todoItem[]> = this.noteSvc.fetchTodoItems();
  public todoItems: any;

  private callToggleReminder = (item: todoItem) => {
    this.noteSvc.setReminder(item);
    this.todoItems = this.todoItems.map((e: any) =>
      e.id === item.id ? { ...e, setReminder: item.setReminder } : e
    );
  };

  public onToggleReminder(item: todoItem) {
    this.callToggleReminder(item);
  }

  public onDeleteNote(item: any) {
    this.noteSvc.deleteNoteItem(item);
    this.todoItems = this.todoItems.filter((e: { id: any; }) => e.id !== item.id);
  }

  constructor(private noteSvc: NoteService) {}

  ngOnInit(): void {
    this.fetchedItems$.subscribe(result => this.todoItems = result);
  }
}
