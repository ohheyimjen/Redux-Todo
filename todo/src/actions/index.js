export const UPDATE_LIST = 'UPDATE_LIST';
export const ADD_TODO = 'ADD_TODO';

export function updateList(newList) {
    
    return {
        type: UPDATE_LIST,
        payload: newList
    };
}

export function addToto(newTodo) {

    return {
        type: ADD_TODO,
        payload: newTodo
    };
}