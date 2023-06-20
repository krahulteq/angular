import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
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
import { FullCalendarModule } from '@fullcalendar/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { UsedBookComponent } from './components/used-book/used-book.component';
import { CommunityResourcesComponent } from './components/community-resources/community-resources.component';
import { TestComponent } from './components/test/test.component';
import { BarcodeComponent } from './components/barcode/barcode.component';
import { ExploreComponent } from './components/explore/explore.component';
import { NilComponent } from './components/nil/nil.component';
import { PopularComponent } from './components/popular/popular.component';
import { ResourceComponent } from './components/resource/resource.component';
import { NewsComponent } from './components/news/news.component';
import { AwardsComponent } from './components/awards/awards.component';
import { HeaderAlternateComponent } from './components/header-alternate/header-alternate.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ExploreDataComponent } from './components/explore-data/explore-data.component';
import { NilFacetsComponent } from './components/nil-facets/nil-facets.component';
import { NilResourcesComponent } from './components/nil-resources/nil-resources.component';
import { NgxBarcode6Module } from 'ngx-barcode6';
import { SearchListComponent } from './components/search-list/search-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
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
    RecentReviewsComponent,
    StarRatingComponent,
    CatalogComponent,
    UsedBookComponent,
    CommunityResourcesComponent,
    TestComponent,
    BarcodeComponent,
    ExploreComponent,
    NilComponent,
    PopularComponent,
    ResourceComponent,
    NewsComponent,
    AwardsComponent,
    HeaderAlternateComponent,
    BreadcrumbComponent,
    ExploreDataComponent,
    NilFacetsComponent,
    NilResourcesComponent,
    SearchListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModalModule,
    MatExpansionModule,
    FullCalendarModule,
    FontAwesomeModule,
    NgxBarcode6Module,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
