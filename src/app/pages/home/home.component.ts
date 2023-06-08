import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NgScrollbar } from 'ngx-scrollbar';
import { SmoothScrollToOptions } from 'ngx-scrollbar/smooth-scroll';
import { getProjectsAction } from 'src/app/state/actions/projects.actions';
import { AppState } from 'src/app/state/app.state';
import * as Aos from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(NgScrollbar) scrollable!: NgScrollbar;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;
  @ViewChild('home') home!: ElementRef;
  @ViewChild('projects') projects!: ElementRef;

  scrollOptions: SmoothScrollToOptions = {
    duration: 800,
    easing: { x1: 0, y1: 0, x2: 0, y2: 0.8 },
  }

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getProjectsAction());
  }

  ngAfterViewInit(): void {
    this.scrollable.scrolled.subscribe(() => Aos.refresh())
  }

  scrollToSection(section: string) {
    this.scrollable.scrollToElement(this[section], this.scrollOptions);
  }
}
