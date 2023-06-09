import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { NgScrollbarModule } from 'ngx-scrollbar';
import { ProjectsRoutingModule } from './projects-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectMenuComponent } from './components/project-menu/project-menu.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectMenuComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    NgScrollbarModule,
    ProjectsRoutingModule,
    SharedModule
  ]
})
export class ProjectsModule { }
