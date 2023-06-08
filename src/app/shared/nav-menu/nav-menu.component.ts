import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {

  @Output() section = new EventEmitter<string>();

  active = false;

  //* Classes
  menu = 'menu menu--active';
  banner = 'menu__banner-img';
  menuIcon = 'fa-bars-staggered'

  menuToggle() {
    this.active = !this.active;
    this.menu = this.active ? 'menu' : 'menu menu--active';

    this.menuIcon = this.active ? 'fa-xmark' : 'fa-bars-staggered';
  }

  navigateTo(section: string) {
    this.menuToggle();
    this.section.emit(section);
  }
}
