import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { HighlightedComponent } from './highlighted/highlighted.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  // { path: '', component: AboutComponent },
  // { path: '', component: HighlightedComponent },
  { path: '', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
