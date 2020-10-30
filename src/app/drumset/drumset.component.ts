import { Component, OnInit } from '@angular/core';
import { drums } from '../drums'

@Component({
  selector: 'app-drumset',
  templateUrl: './drumset.component.html',
  styleUrls: ['./drumset.component.css']
})
export class DrumsetComponent implements OnInit {
  drums = drums;
  // must be passed down to child component with two way binding because it is a variable 
  isActive : boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  // can be passed to child components with property binding because it is a function 
  addDrum(drum) {
     drums.push(drum)
  }
  activateForm() {
    this.isActive = true
  }
  deactivateForm() {
    this.isActive = false
  }

}
