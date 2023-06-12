import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { getIconClass } from 'src/app/helpers/icon-class.helper';
import { IProject } from 'src/app/models/project.interface';
import { getSingleProjectAction } from 'src/app/state/actions/single-project.actions';
import { AppState } from 'src/app/state/app.state';
import { selectSingleProject } from 'src/app/state/selectors/single-project.selectors';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  project$!: Observable<IProject | null>;
  images: string[] = [];
  imagesWebp: string[] = [];
  icons: string[] = [];
  longDescription!: SafeHtml;

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.dispatchProjectAction();
    this.project$ = this.store.select(selectSingleProject)
      .pipe(
        tap(project => {
          if (project) {
            this.images = [...project.images];
            this.imagesWebp = [...project.imagesWebp];
            this.getIconClass(project.technologies);
            this.longDescription = this.sanitizer.bypassSecurityTrustHtml(project.longDescription)
          }
        })
      );
  }

  getIconClass(icons: string[]) {
    this.icons = icons.map(tech => getIconClass(tech))
  }

  private dispatchProjectAction() {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.store.dispatch(getSingleProjectAction({ id }))
    })
  }

}
