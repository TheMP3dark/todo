import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNoteComponent } from './add-new-note.component';

describe('AddNewNoteComponent', () => {
  let component: AddNewNoteComponent;
  let fixture: ComponentFixture<AddNewNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
