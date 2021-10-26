import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
// import { DrumsetComponent } from './drumsets/drumset/drumset.component';
// import { DrumBlockComponent } from './drumsets/drum-block/drum-block.component';
// import { EditDrumsetComponent } from './drumsets/edit-drumset/edit-drumset.component';
// import { ReactiveDrumFormComponent } from './drumsets/reactive-drum-form/reactive-drum-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { DrumsetsModule } from './drumsets/drumsets.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    // DrumsetComponent,
    // DrumBlockComponent,
    // EditDrumsetComponent,
    // ReactiveDrumFormComponent,
    PageNotFoundComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DrumsetsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
