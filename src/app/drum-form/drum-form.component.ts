import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drum-form',
  templateUrl: './drum-form.component.html',
  styleUrls: ['./drum-form.component.css']
})
export class DrumFormComponent implements OnInit {
  @Input() addDrum;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event) {
    event.preventDefault()
    console.log(event.target.name.value, event.target.sound.value)
    const drum = {
      name: event.target.name.value, 
      sound: event.target.sound.value
    }
    this.addDrum(drum)
  }

}
