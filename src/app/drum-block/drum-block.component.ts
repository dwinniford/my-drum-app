import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-drum-block',
  templateUrl: './drum-block.component.html',
  styleUrls: ['./drum-block.component.css']
})
export class DrumBlockComponent implements OnInit {
  @Input() drum: any
  hasTapping: boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  tap(event) {
    this.hasTapping = true
    setTimeout(()=> {
      this.hasTapping = false
    }, 2000)
  }

}
