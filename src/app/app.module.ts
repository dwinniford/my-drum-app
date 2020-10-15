import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { DrumsetComponent } from './drumset/drumset.component';
import { DrumBlockComponent } from './drum-block/drum-block.component';
import { DrumBuilderComponent } from './drum-builder/drum-builder.component';
import { DrumFormComponent } from './drum-form/drum-form.component';
import { ReactiveDrumFormComponent } from './reactive-drum-form/reactive-drum-form.component';

const appRoutes: Routes = [
  {path: '', component: DrumsetComponent },
  {path: 'edit', component: DrumBuilderComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DrumsetComponent,
    DrumBlockComponent,
    DrumBuilderComponent,
    DrumFormComponent,
    ReactiveDrumFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
