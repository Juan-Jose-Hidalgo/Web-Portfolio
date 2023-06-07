import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { ProjectsService } from 'src/app/services/projects.service';

@Injectable()
export class ProjectsEffects {

    getProjects$ = createEffect(() => this.actions$
        .pipe(
            ofType('[Projects] Get Projects'),
            mergeMap(() => this.projectsService.getAll()
                .pipe(
                    map(projects => ({ type: '[Projects] Get Projects Success', projects })),
                    catchError((error: any) => of({ type: '[Projects] Get Projects Error', message: error.error.message }))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private projectsService: ProjectsService
    ) { }
}