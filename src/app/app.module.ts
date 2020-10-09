import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DrumsetComponent } from './drumset/drumset.component';
import { DrumBlockComponent } from './drum-block/drum-block.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumsetComponent,
    DrumBlockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
