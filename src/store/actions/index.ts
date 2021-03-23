import { ActionType } from '../action-types'

export type Action = 
    | InputAction
    | InputSuccessAction
    | InputFailedAction
    ;

export interface InputAction {
    type: ActionType.INPUT;
    payload : {
        gif:string,
      }
}
export interface InputSuccessAction {
    type: ActionType.INPUT_SUCCESS;
    payload: string
}
export interface InputFailedAction {
    type: ActionType.INPUT_FAILED;
    payload: string
}
