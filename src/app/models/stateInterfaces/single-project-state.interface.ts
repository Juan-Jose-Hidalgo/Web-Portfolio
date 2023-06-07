import { IProject } from "../project.interface";
import { IState } from "./state.interface";

export interface ISingleProjectState extends IState {
    project: IProject | null;
}