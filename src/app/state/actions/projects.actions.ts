import { createAction, props } from '@ngrx/store';
import { IProject } from 'src/app/models/project.interface';

export const getProjectsAction = createAction(
    '[Projects] Get Projects'
);

export const getProjectsSuccessAction = createAction(
    '[Projects] Get Projects Success',
    props<{ projects: IProject[] }>()
);

export const getProjectsErrorAction = createAction(
    '[Projects] Get Projects Error',
    props<{ error: string }>()
);