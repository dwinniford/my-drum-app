import { Component, OnInit } from '@angular/core';
import { DrumSetupService } from '../drum-setup.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-drumset',
  templateUrl: './edit-drumset.component.html',
  styleUrls: ['./edit-drumset.component.css']
})
export class EditDrumsetComponent implements OnInit {
  drums: any = []
  setId: string
  constructor(
    private drumSetupService: DrumSetupService,
    private route: ActivatedRoute
  ) {}
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.setId = params.get('id')
      this.drumSetupService.getAllDrumsets.subscribe(drumsets => this.drums = drumsets[this.setId])
    })
  }

}
