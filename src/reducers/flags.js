import { SET_FLAG } from "../actions/types";

const initialState = {
  flagIcon: "",
  flagCode: "ES",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_FLAG:
      return {
        flagIcon: payload.icon,
        flagCode: payload.code,
      };

    default: {
      return state;
    }
  }
}
