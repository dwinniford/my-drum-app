import { Component, OnInit } from '@angular/core';
import { DrumSetupService } from '../drum-setup.service';

@Component({
  selector: 'app-edit-drumset',
  templateUrl: './edit-drumset.component.html',
  styleUrls: ['./edit-drumset.component.css']
})
export class EditDrumsetComponent implements OnInit {
  constructor(private drumSetupService: DrumSetupService) { }

  drums = this.drumSetupService.getDrumset(0)
  ngOnInit(): void {
  }

}
