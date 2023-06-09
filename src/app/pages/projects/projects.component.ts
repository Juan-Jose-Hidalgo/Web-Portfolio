import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getSingleProjectAction } from 'src/app/state/actions/single-project.actions';
import { AppState } from 'src/app/state/app.state';
import { selectSingleProject } from 'src/app/state/selectors/single-project.selectors';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getSingleProjectAction({ id: 'sTrwiL0l0CW45h2P3olI' }))
  }
}
