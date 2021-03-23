import { ActionType } from '../action-types'
import { Action } from '../actions'

const INITIAL_STATE = {
    errorMsg: "",
    result: "",
    loading: false,
};

interface INITIAL_TS  {
    errorMsg: string;
    result: string;
    loading: Boolean;
};

const inputReducer = ( state : INITIAL_TS = INITIAL_STATE, action:Action ):INITIAL_TS => {
    switch (action.type) {
      case ActionType.INPUT:
        return {
            ...state,
            loading: true, 
        };
      case ActionType.INPUT_SUCCESS:  
        return { 
            ...state, 
            result: action.payload, 
            loading: false 
        };   
      case ActionType.INPUT_FAILED:
        return {
            ...state,
            errorMsg: action.payload,
            loading: false 
        };      
      default:
        return state;
    }
};

export default inputReducer;
export type RootState = ReturnType<typeof inputReducer>;