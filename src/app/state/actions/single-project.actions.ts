import { createAction, props } from '@ngrx/store';
import { IProject } from 'src/app/models/project.interface';

export const getSingleProjectAction = createAction(
    '[Project] Get Single Project',
    props<{ id: string }>()
);

export const getSingleProjectSuccessAction = createAction(
    '[Project] Get Single Project Success',
    props<{ project: IProject }>()
);

export const getSingleProjectFailureAction = createAction(
    '[Project] Get Single Project Failure',
    props<{ error: string }>()
);