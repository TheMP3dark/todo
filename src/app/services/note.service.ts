import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { todoItem } from 'src/app/models/todo.models';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private url = 'http://localhost:3000';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  public fetchTodoItems = () =>
    this.http.get<todoItem[]>(`${this.url}/todoItemsData`);

  public async addNoteItem(newNote: todoItem) {
    this.http
      .post(`${this.url}/todoItemsData`, newNote, {
        headers: this.headers,
      })
      .subscribe();
  }

  public setReminder(noteItem: todoItem) {
    const toggleReminderValue = {
      ...noteItem,
      setReminder: noteItem.setReminder,
    };

    this.http
      .put(`${this.url}/todoItemsData/${noteItem.id}`, toggleReminderValue, {
        headers: this.headers,
      })
      .subscribe();
  }

  public deleteNoteItem(item: todoItem) {
    this.http.delete(`${this.url}/todoItemsData/${item.id}`).subscribe();
  }

  constructor(private http: HttpClient) {}
}
