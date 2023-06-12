import { createReducer, on } from "@ngrx/store";
import { ISingleProjectState } from "src/app/models/stateInterfaces/single-project-state.interface";
import { getSingleProjectAction, getSingleProjectFailureAction, getSingleProjectSuccessAction } from "../actions/single-project.actions";

export const initialState: ISingleProjectState = { loading: false, error: null, project: null };

export const singleProjectReducer = createReducer(
    initialState,
    on(getSingleProjectAction, (state) => {
        return { ...state, loading: true };
    }),
    on(getSingleProjectSuccessAction, (state, { project }) => {
        return { ...state, loading: false, project };
    }),
    on(getSingleProjectFailureAction, (state, { error }) => {
        return { ...state, loading: false, error };
    })
);