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
  animation = new FormControl('');

  @Input() addDrum;
  @Input() isActive;
  @Input() editDrum;
  @Input() drum;
  @Output() isActiveChange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    if(this.drum) {
      this.name.setValue(this.drum.name)
      this.sound.setValue(this.drum.sound)
      this.animation.setValue(this.drum.animation)
    }
  }
  onSubmit(event) {
    event.preventDefault()
    
    const drum = {
      name: this.name.value,
      sound: this.sound.value,
      animation: this.animation.value
    }
    if(this.editDrum) {
      this.editDrum(drum)
    } else {
      this.addDrum(drum)
      this.isActive = false
      this.isActiveChange.emit(this.isActive)
    }
    
  }

}
