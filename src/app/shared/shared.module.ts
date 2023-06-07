import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { MaterialModule } from './material/material.module';
import { LegalComponent } from './legal/legal.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    SocialLinksComponent,
    LegalComponent
  ],
  exports: [
    NavMenuComponent,
    MaterialModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
