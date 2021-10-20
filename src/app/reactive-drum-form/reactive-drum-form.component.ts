import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-drum-form',
  templateUrl: './reactive-drum-form.component.html',
  styleUrls: ['./reactive-drum-form.component.css']
})
export class ReactiveDrumFormComponent implements OnInit {
  drumForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    sound: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    animation: new FormControl('', [
      Validators.required
    ])
  })
  get name() {return this.drumForm.get("name")};
  get sound() {return this.drumForm.get("sound")};
  get animation() {return this.drumForm.get("animation")};
  

  @Input() addDrum;
  @Input() isActive;
  @Input() editDrum;
  @Input() drum;
  @Output() isActiveChange = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    if(this.drum) {
      this.drumForm.setValue({
        name: this.drum.name,
        sound: this.drum.sound,
        animation: this.drum.animation
      })
    }
  }
  onSubmit(event) {
    event.preventDefault()
    
    const drum = this.drumForm.value()
    if(this.editDrum) {
      this.editDrum(drum)
    } else {
      this.addDrum(drum)
      this.isActive = false
      this.isActiveChange.emit(this.isActive)
    }
    
  }

}
