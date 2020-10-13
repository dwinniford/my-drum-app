import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drum-form',
  templateUrl: './drum-form.component.html',
  styleUrls: ['./drum-form.component.css']
})
export class DrumFormComponent implements OnInit {
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
