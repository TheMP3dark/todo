import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-main',
  templateUrl: './container-main.component.html',
  styleUrls: ['./container-main.component.css']
})
export class ContainerMainComponent implements OnInit {
  public showAddNoteSection: boolean = false;

  public changAddNoteSectionVisibility(val: any) {
    this.showAddNoteSection = val;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
