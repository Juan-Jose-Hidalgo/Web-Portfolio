import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgScrollbar } from 'ngx-scrollbar';
import * as Aos from 'aos';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {

  @ViewChild(NgScrollbar) scrollable!: NgScrollbar;

  ngAfterViewInit(): void {
    this.scrollable.scrolled.subscribe(() => Aos.refresh())
  }
}
