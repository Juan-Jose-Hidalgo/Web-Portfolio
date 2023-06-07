import { IProject } from "../project.interface";
import { IState } from "./state.interface";

export interface IProjectsState extends IState {
    projects: IProject[];
}