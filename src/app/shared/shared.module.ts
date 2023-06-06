import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SocialLinksComponent } from './social-links/social-links.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    SocialLinksComponent
  ],
  exports: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class SharedModule { }
