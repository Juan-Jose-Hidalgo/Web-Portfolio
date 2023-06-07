import { IFirebase } from "./firebase.interface";

export interface IEnvironment {
    production: boolean;
    URL: string;
    firebase: IFirebase;
}

