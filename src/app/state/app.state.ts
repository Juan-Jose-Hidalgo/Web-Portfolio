import { ActionReducerMap } from "@ngrx/store";

//* Interfaces
import { IProjectsState } from "../models/stateInterfaces/projects-state.interface";

//* Reducers
import { projectsReducer } from "./reducers/projects.reducer";

export interface AppState {
    projects: IProjectsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    projects: projectsReducer
}
