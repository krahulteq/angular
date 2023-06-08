import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { BannerComponent } from './components/banner/banner.component';
import { SearchComponent } from './components/search/search.component';
import { FaqComponent } from './components/faq/faq.component';
import { LlhComponent } from './components/llh/llh.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { CollectionComponent } from './components/collection/collection.component';
import { PopularTitlesComponent } from './components/popular-titles/popular-titles.component';
import { NewComponent } from './components/new/new.component';
import { MysteriesComponent } from './components/mysteries/mysteries.component';
import { RecentReviewsComponent } from './components/recent-reviews/recent-reviews.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
  
    AdminDashboardComponent,
       HeaderComponent,
       FooterComponent,
       HomeComponent,
       AboutComponent,
       ServicesComponent,
       ContactComponent,
       BannerComponent,
       SearchComponent,
       FaqComponent,
       LlhComponent,
       CalendarComponent,
       AnimalsComponent,
       CollectionComponent,
       PopularTitlesComponent,
       NewComponent,
       MysteriesComponent,
       RecentReviewsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModalModule,
    MatExpansionModule
  ]
})
export class AdminModule { }
