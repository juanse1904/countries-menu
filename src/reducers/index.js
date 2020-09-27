const reducer = (state, action) => {
  switch (action.type) {
    case 'EXPAND_INFO':
      return {
        ...state,
        Expand: [...state,]
      }
    default:
      return state;
  }
};

export default reducer;
