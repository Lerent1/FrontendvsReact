const initialState = {
  color: false
};

export const color = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "changeColor":
      return {...state, color: !state.color};
    default:
      return state;
  }
};