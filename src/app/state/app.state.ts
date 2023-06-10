import { ActionReducerMap } from "@ngrx/store";

//* Interfaces
import { IProjectsState } from "../models/stateInterfaces/projects-state.interface";
import { ISingleProjectState } from "../models/stateInterfaces/single-project-state.interface";

//* Reducers
import { projectsReducer } from "./reducers/projects.reducer";
import { singleProjectReducer } from "./reducers/single-project.reducer";

export interface AppState {
    project: ISingleProjectState;
    projects: IProjectsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    project: singleProjectReducer,
    projects: projectsReducer
}
