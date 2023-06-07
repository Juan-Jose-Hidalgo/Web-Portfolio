import { createReducer, on } from "@ngrx/store";
import { IProjectsState } from "src/app/models/stateInterfaces/projects-state.interface";
import { getProjectsAction, getProjectsErrorAction, getProjectsSuccessAction } from "../actions/projects.actions";

export const initialState: IProjectsState = { loading: false, error: null, projects: [] };

export const projectsReducer = createReducer(
    initialState,
    on(getProjectsAction, (state) => {
        return { ...state, loading: true };
    }),
    on(getProjectsSuccessAction, (state, { projects }) => {
        return { ...state, loading: false, projects }
    }),
    on(getProjectsErrorAction, (state, { error }) => {
        return { ...state, loading: false, error }
    })
);