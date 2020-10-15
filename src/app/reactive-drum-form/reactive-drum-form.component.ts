import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-reactive-drum-form',
  templateUrl: './reactive-drum-form.component.html',
  styleUrls: ['./reactive-drum-form.component.css']
})
export class ReactiveDrumFormComponent implements OnInit {
  name = new FormControl('');
  sound = new FormControl('');

  @Input() addDrum;
  @Input() isActive;
  @Output() isActiveChange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event) {
    event.preventDefault()
    
    const drum = {
      name: event.target.name.value, 
      sound: event.target.sound.value
    }
    this.addDrum(drum)
    this.isActive = false
    this.isActiveChange.emit(this.isActive)
  }

}
