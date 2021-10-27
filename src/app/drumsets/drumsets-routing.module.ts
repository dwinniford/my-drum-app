import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrumsetComponent } from './drumset/drumset.component';
import { EditDrumsetComponent } from './edit-drumset/edit-drumset.component';

const drumsetRoutes: Routes = [
  {path: "drumsets/:id", component: DrumsetComponent, data: { animation: 'drumset' } },
  {path: "drumsets/:id/edit", component: EditDrumsetComponent, data: {animation: 'edit-drumset'}}
];

@NgModule({
  imports: [RouterModule.forChild(drumsetRoutes)],
  exports: [RouterModule]
})
export class DrumsetsRoutingModule { }
