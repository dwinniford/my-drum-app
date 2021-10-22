import { Injectable } from '@angular/core';
import { drums } from './drums'; 

@Injectable({
  providedIn: 'root'
})
export class DrumSetupService {
  private currentDrums = drums
  constructor() { }
  
  getDrums() {
    console.log(this.currentDrums)
    return this.currentDrums
  }
  addDrum(drum) {
    this.currentDrums.push(drum)
  }
  editDrum(index, drum) {
    this.currentDrums.splice(index, 1, drum)
  }

}
