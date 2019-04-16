export default (state = initialState, action) => {
  title: "Todos";
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "TODO_LIST":
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}
