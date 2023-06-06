import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { HeaderComponent } from './header/header.component';
import { ExploreComponent } from './library/explore/explore.component';
import { NewComponent } from './library/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    HeaderComponent,
    ExploreComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
