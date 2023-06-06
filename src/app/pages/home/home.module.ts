import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuNavComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgOptimizedImage
  ]
})
export class HomeModule { }
