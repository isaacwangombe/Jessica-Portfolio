import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NavComponent } from './nav/nav.component';
import { HighlightedComponent } from './highlighted/highlighted.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LandingComponent,
    TimelineComponent,
    NavComponent,
    HighlightedComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgxHideOnScrollModule,
    MdbCollapseModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
