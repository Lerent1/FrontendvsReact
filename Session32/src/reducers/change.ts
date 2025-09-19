const initialState = {
  change: false
};

export const change = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, change: !state.change };
    default:
      return state;
  }
};
