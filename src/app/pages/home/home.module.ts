import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectComponent } from './components/project/project.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgScrollbarModule } from 'ngx-scrollbar';



@NgModule({
  declarations: [
    HomeComponent,
    MenuNavComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ProjectComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    NgScrollbarModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HomeModule { }
