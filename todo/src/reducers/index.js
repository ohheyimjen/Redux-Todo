
const initialState = {
    title: 'Todo List',
    todos: [
        {
            item: 'Feed doggo',
            completed: false
        },
        {
            item: 'Teach doggo to pour a glass of wine',
            completed: false
        },
        {
            item: 'Teach doggo to complete my todo list',
            completed: false
        }

    ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_LIST":
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}

export default reducer;