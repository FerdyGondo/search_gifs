
import { ActionType } from "../action-types";
import { 
    // Action, 
    InputAction, 
    InputSuccessAction, 
    InputFailedAction, 
} from '../actions';

export const input = (gif:string) : InputAction => {
  console.log('action gif', gif);
    return {
        type: ActionType.INPUT,
        payload : {
          gif
        }
    }
  }

  export const inputSuccess = (time:string) : InputSuccessAction => {
    return {
        type: ActionType.INPUT_SUCCESS,
        payload: result,
    }
  }
  
  export const inputFailed = (errorMsg:string) : InputFailedAction => {
    return {
      type: ActionType.INPUT_FAILED,
      payload: errorMsg
    }
  }
