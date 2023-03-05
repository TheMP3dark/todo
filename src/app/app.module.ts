import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ContainerMainComponent } from './components/container-main/container-main.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddNewNoteComponent } from './components/add-new-note/add-new-note.component';

import { NoteService } from './services/note.service';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerMainComponent,
    HeaderComponent,
    ButtonComponent,
    TodoListComponent,
    TodoItemComponent,
    AddNewNoteComponent,
    AboutUsComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [NoteService],
  bootstrap: [AppComponent],
})
export class AppModule { }
