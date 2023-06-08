import { Component, ElementRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/models/project.interface';
import { AppState } from 'src/app/state/app.state';
import { selectProjects } from 'src/app/state/selectors/projects.selectors';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects$: Observable<IProject[]> = new Observable();

  constructor(
    private store: Store<AppState>,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.projects$ = this.store.select(selectProjects);
  }
}
