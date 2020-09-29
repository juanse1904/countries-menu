const reducer = (state, action) => {
  switch (action.type) {
    case 'FILTER_':
      return {
        ...state,
        Expand: [...state,]
      }
    default:
      return state;
  }
};

export default reducer;
