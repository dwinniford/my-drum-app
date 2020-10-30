import { Component, OnInit } from '@angular/core';
import { drums } from '../drums'

@Component({
  selector: 'app-drum-builder',
  templateUrl: './drum-builder.component.html',
  styleUrls: ['./drum-builder.component.css']
})
export class DrumBuilderComponent implements OnInit {
  drums = drums
  constructor() { }

  ngOnInit(): void {
  }
  editDrum(drum) {
    console.log('edited drum')
  }

}
