import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site/site.component';
import { ExploreComponent } from './library/explore/explore.component';
import { NewComponent } from './library/new/new.component';

const routes: Routes = [
  { path: '', component: SiteComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'new', component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
