import { ActionType } from "./ActionType";

export interface ActionModel {
    type: ActionType;
    value?: any;
}

export interface Point {
    x: number;
    y: number;
}