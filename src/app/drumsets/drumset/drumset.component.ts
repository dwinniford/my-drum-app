import { Component, OnInit } from '@angular/core';
import { DrumSetupService } from '../drum-setup.service';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-drumset',
  templateUrl: './drumset.component.html',
  styleUrls: ['./drumset.component.css']
})
export class DrumsetComponent implements OnInit {
  // must be passed down to child component with two way binding because it is a variable 
  isActive : boolean = false;
  drums: any = []
  setId: string
  constructor(
    private drumSetupService: DrumSetupService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params)
      this.setId = params.get('id')
      this.drums = this.drumSetupService.getDrumset(this.setId)
    })
  }


  activateForm() {
    this.isActive = true
  }
  deactivateForm() {
    this.isActive = false
  }

}
