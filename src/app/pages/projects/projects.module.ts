import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { GalleryModule } from 'ng-gallery';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ProjectsRoutingModule } from './projects-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectMenuComponent } from './components/project-menu/project-menu.component';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectMenuComponent,
    ProjectGalleryComponent,
  ],
  imports: [
    CommonModule,
    GalleryModule,
    NgOptimizedImage,
    NgScrollbarModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
