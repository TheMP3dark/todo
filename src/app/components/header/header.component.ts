import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() value = new Input();
  @Output() btnClicked = new EventEmitter<boolean>();

  public addButtonText: string = 'Add';

  public sendButtonCallbackResult(val: any) {
    this.btnClicked.emit(val);
    this.addButtonText = val ? 'Close' : 'Add';
  }

  constructor() {}

  ngOnInit(): void {}
}
