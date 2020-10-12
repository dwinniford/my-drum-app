import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drum-block',
  templateUrl: './drum-block.component.html',
  styleUrls: ['./drum-block.component.css']
})
export class DrumBlockComponent implements OnInit {
  @Input() drum: any
  constructor() { }

  ngOnInit(): void {
  }
  tap() {
    window.alert(`${this.drum.sound}!!!!`)
  }

}
