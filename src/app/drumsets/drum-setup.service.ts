import { Injectable } from '@angular/core';
import { drums } from './drums'; 

@Injectable({
  providedIn: 'root'
})
export class DrumSetupService {
  private currentDrumsets = [[...drums]]
  constructor() { }
  
  getAllDrumsets() {
    return this.currentDrumsets
  }

  getDrumset(setIndex) {
    console.log(this.currentDrumsets[setIndex])
    return this.currentDrumsets[setIndex]
  }
  addDrumToSet(setIndex, drum) {
    this.currentDrumsets[setIndex].push(drum)
    console.log("currentDrumsets array after addDrumToSet", this.currentDrumsets, " original drums array =", drums)
  }
  editDrumInSet(setIndex, drumIndex, drum) {
    this.currentDrumsets[setIndex].splice(drumIndex, 1, drum)
  }
  addDrumset() {
    this.currentDrumsets.push([...drums])
  }

}
