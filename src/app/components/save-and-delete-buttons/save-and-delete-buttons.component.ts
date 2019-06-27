import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-save-and-delete-buttons',
  templateUrl: './save-and-delete-buttons.component.html',
  styleUrls: ['./save-and-delete-buttons.component.scss'],
})
export class SaveAndDeleteButtonsComponent implements OnInit {
  @Output() saveEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  save() {
    this.saveEvent.next();
  }

  remove() {
    this.removeEvent.next();
  }
}
