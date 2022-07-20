export const addListAction = (list) => ({
  type: 'ADD_LIST',
  payload: list,
});

export const deleteListAction = (id) => ({
  type: 'DELETE_LIST',
  payload: id,
});

export const addTodoAction = (todo) => ({
  type: 'ADD_TODO',
  payload: todo,
});

export const deleteTodoAction = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const completeTodoAction = (id) => ({
  type: 'COMPLETE_TODO',
  payload: id,
});
