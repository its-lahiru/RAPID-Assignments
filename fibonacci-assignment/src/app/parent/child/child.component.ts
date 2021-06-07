import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // for take input value
  private _inputValue: number = 0;

  // setter
  set inputValue(value: number) {
    this._inputValue = value;
  }
  // getter
  get inputValue() {
    return this._inputValue;
  }

  @Output() getInputValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendInputVal(): void {
    this.getInputValue.emit(this.inputValue);
  }

}
