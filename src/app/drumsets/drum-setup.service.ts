import { Injectable } from '@angular/core';
import { drums } from './drums'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrumSetupService {
  private currentDrumsets = new BehaviorSubject([[...drums]])
  constructor() { }
  
  getAllDrumsets = this.currentDrumsets.asObservable()

  getDrumset(setIndex) {
    console.log(this.currentDrumsets[setIndex])
    return this.currentDrumsets[setIndex]
  }
  addDrumToSet(setIndex, drum) {
    let nextValue = [...this.currentDrumsets.getValue()]
    nextValue[setIndex].push(drum)
    this.currentDrumsets.next(nextValue)
    console.log("currentDrumsets array after addDrumToSet", this.currentDrumsets.getValue(), " original drums array =", drums)
  }
  editDrumInSet(setIndex, drumIndex, drum) {
    let nextValue = [...this.currentDrumsets.getValue()]
    nextValue[setIndex].splice(drumIndex, 1, drum)
    this.currentDrumsets.next(nextValue)
  }
  addDrumset() {
    let nextValue = [...this.currentDrumsets.getValue()]
    nextValue.push([...drums])
    this.currentDrumsets.next(nextValue)
  }

}
