import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProjectsAction } from 'src/app/state/actions/projects.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(getProjectsAction());
  }
}
