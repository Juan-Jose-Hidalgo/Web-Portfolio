import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ISingleProjectState } from "src/app/models/stateInterfaces/single-project-state.interface";

export const selectSingleProjectFeature = (state: AppState) => state.project;

export const selectSingleProject = createSelector(
    selectSingleProjectFeature,
    (state: ISingleProjectState) => state.project
);