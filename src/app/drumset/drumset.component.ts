import { Component, OnInit } from '@angular/core';
import { drums } from '../drums'
import { DrumSetupService } from '../drum-setup.service';

@Component({
  selector: 'app-drumset',
  templateUrl: './drumset.component.html',
  styleUrls: ['./drumset.component.css']
})
export class DrumsetComponent implements OnInit {
  // must be passed down to child component with two way binding because it is a variable 
  isActive : boolean = false;
  constructor(private drumSetupService: DrumSetupService) {}
  

  ngOnInit(): void {
  }
  drums = this.drumSetupService.getDrums();

  activateForm() {
    this.isActive = true
  }
  deactivateForm() {
    this.isActive = false
  }

}
