import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { DrumsetsRoutingModule } from './drumsets-routing.module';

import { DrumsetComponent } from './drumset/drumset.component';
import { DrumBlockComponent } from './drum-block/drum-block.component';
import { EditDrumsetComponent } from './edit-drumset/edit-drumset.component';
import { ReactiveDrumFormComponent } from './reactive-drum-form/reactive-drum-form.component';


@NgModule({
  declarations: [
    DrumsetComponent,
    DrumBlockComponent,
    EditDrumsetComponent,
    ReactiveDrumFormComponent
  ],
  imports: [
    CommonModule,
    DrumsetsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DrumsetsModule { }
