import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeInAnimation } from './animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation]
})
export class AppComponent {
  title = 'my-drum-app';
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
  }
}
