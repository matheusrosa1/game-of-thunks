import getGotCharacter from "../../services/gotAPI";
import { Dispatch } from "../../type";

export const REQUEST_CHARACTER_START = 'REQUEST_CHARACTER_START';
export const REQUEST_CHARACTER_ERROR = 'REQUEST_CHARACTER_ERROR';
export const REQUEST_CHARACTER_SUCCESS = 'REQUEST_CHARACTER_SUCCESS';

const requestCharacterStart = () => ({
  type: REQUEST_CHARACTER_START,
})

const requestCharacterError = () => ({
  type: REQUEST_CHARACTER_ERROR,
})

const requestCharacterSuccess = (name: string, titles: string[], aliases: string, culture: string) => ({
  type: REQUEST_CHARACTER_START,
  payload: {
    name,
    titles,
    aliases,
    culture,
  }
})

export const fetchCharacter = (nameOfCharacter: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestCharacterStart());
const {name, titles, aliases, culture} = await getGotCharacter(nameOfCharacter);
dispatch(requestCharacterSuccess(name, titles, aliases, culture))
    } catch (e) {
      dispatch(requestCharacterError());
    }
  }
}