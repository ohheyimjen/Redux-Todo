import {UPDATE_LIST, ADD_TODO} from '../actions'

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

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LIST:
      return {
        ...state,
        title: action.payload
      };

      case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, 
            {
                item: action.payload,
                completed: false
            }
            ]
        }
    default:
      return state;
  }
}

