import { Component, OnInit } from '@angular/core';
import { drums } from '../drums'

@Component({
  selector: 'app-drumset',
  templateUrl: './drumset.component.html',
  styleUrls: ['./drumset.component.css']
})
export class DrumsetComponent implements OnInit {
  drums = drums;
  isActive : boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  addDrum(drum) {
     drums.push(drum)
  }
  activateForm() {
    this.isActive = true
  }

}
