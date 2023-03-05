import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() displayText = new Input();
  @Input() value = new Input();
  @Output() result = new EventEmitter<boolean>;

  public onClick() {
    this.result.emit(!this.value)
  }

  constructor() {}

  ngOnInit(): void {}
}
