import { Component, OnInit } from '@angular/core';
import { DrumSetupService } from '../drumsets/drum-setup.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private drumSetupService: DrumSetupService) { }

  drumsets: any
  ngOnInit() {
    this.drumSetupService.getAllDrumsets.subscribe(drumsets => this.drumsets = drumsets)
  }
  

  addDrumset() {
    this.drumSetupService.addDrumset()
  }

}
