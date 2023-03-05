import { Component, OnInit } from '@angular/core';

import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-new-note',
  templateUrl: './add-new-note.component.html',
  styleUrls: ['./add-new-note.component.css'],
})
export class AddNewNoteComponent implements OnInit {
  public title: string = '';
  public content: string = '';
  public setReminder: boolean = false;

  constructor(private noteSvc: NoteService) {}

  private clearFormValues() {
    this.title = '';
    this.content = '';
    this.setReminder = false;
  }

  public async addNote() {
    await this.title
      ? this.noteSvc.addNoteItem({
          title: this.title,
          content: this.content,
          setReminder: this.setReminder,
        })
      : window.alert('Please enter a Title!');

    await this.clearFormValues();
    window.location.reload();
  }

  ngOnInit(): void {}
}
