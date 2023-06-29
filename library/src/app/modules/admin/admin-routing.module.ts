import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ExploreComponent } from './components/explore/explore.component';
import { NilComponent } from './components/nil/nil.component';
import { PopularComponent } from './components/popular/popular.component';
import { ResourceComponent } from './components/resource/resource.component';
import { NewsComponent } from './components/news/news.component';
import { AwardsComponent } from './components/awards/awards.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { AccountComponent } from './components/account/account.component';
import { HistoryComponent } from './components/history/history.component';
import { ListComponent } from './components/list/list.component';
import { authGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'explore', component: ExploreComponent },
      { path: 'new', component: NilComponent },
      { path: 'popular', component: PopularComponent },
      { path: 'reading-lists', component: ResourceComponent },
      { path: 'news', component: NewsComponent },
      { path: 'awards', component: AwardsComponent },
      { path: 'searchlist', component: SearchListComponent },
      { path: 'my-account', canActivate: [authGuard], component: AccountComponent },
      { path: 'history', canActivate: [authGuard], component: HistoryComponent },
      { path: 'list/my', canActivate: [authGuard], component: ListComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
