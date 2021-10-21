import { Component, OnInit } from '@angular/core';
import { DrumSetupService } from '../drum-setup.service';

@Component({
  selector: 'app-drum-builder',
  templateUrl: './drum-builder.component.html',
  styleUrls: ['./drum-builder.component.css']
})
export class DrumBuilderComponent implements OnInit {
  constructor(private drumSetupService: DrumSetupService) { }

  drums = this.drumSetupService.getDrums()
  ngOnInit(): void {
  }

}
