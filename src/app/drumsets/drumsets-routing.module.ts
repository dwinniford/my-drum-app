import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrumsetComponent } from './drumset/drumset.component';
import { EditDrumsetComponent } from './edit-drumset/edit-drumset.component';

const drumsetRoutes: Routes = [
  {path: "drumsets", component: DrumsetComponent},
  {path: "drumsets/edit", component: EditDrumsetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(drumsetRoutes)],
  exports: [RouterModule]
})
export class DrumsetsRoutingModule { }
