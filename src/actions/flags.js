import { SET_FLAG } from "./types";

export const setFlag =
  ({ country }) =>
  async (dispatch) => {
    dispatch({
      type: SET_FLAG,
      payload: country,
    });
  };
