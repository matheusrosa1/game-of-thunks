import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type ReduxState = {
  name: string,
  titles: string[],
  aliases: string[],
  culture: string,
}

export type Dispatch = ThunkDispatch<ReduxState, null, AnyAction>;