import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { DrumsetComponent } from './drumset/drumset.component';
import { DrumBuilderComponent } from './drum-builder/drum-builder.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  {path: 'edit', component: DrumBuilderComponent},
  {path: 'drum-pad', component: DrumsetComponent},
  {path: '', redirectTo: '/drum-pad', pathMatch: 'full' },
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
