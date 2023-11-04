import { combineReducers } from "redux";
import getGotCharacter from '../../services/gotAPI';

const rootReducer = combineReducers({getGotCharacter});

export default rootReducer;