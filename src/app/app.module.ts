import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { DrumsetComponent } from './drumset/drumset.component';
import { DrumBlockComponent } from './drum-block/drum-block.component';
import { EditDrumsetComponent } from './edit-drumset/edit-drumset.component';
import { DrumFormComponent } from './drum-form/drum-form.component';
import { ReactiveDrumFormComponent } from './reactive-drum-form/reactive-drum-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DrumsetComponent,
    DrumBlockComponent,
    EditDrumsetComponent,
    DrumFormComponent,
    ReactiveDrumFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
