import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { DrumsetComponent } from './drumsets/drumset/drumset.component';
import { EditDrumsetComponent } from './drumsets/edit-drumset/edit-drumset.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  // {path: 'edit', component: EditDrumsetComponent},
  // {path: 'drum-pad', component: DrumsetComponent},
  {path: '', redirectTo: '/drumsets/0', pathMatch: 'full' },
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
