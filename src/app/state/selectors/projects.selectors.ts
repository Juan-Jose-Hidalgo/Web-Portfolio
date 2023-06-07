import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { IProjectsState } from "src/app/models/stateInterfaces/projects-state.interface";

export const selectProjectsFeature = (state: AppState) => state.projects;

export const selectProjects = createSelector(
    selectProjectsFeature,
    (state: IProjectsState) => state.projects
);