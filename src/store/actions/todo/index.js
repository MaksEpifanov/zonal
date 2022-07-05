export const addListAction = (data) => ({
  type: 'ADD_LIST',
  payload: data,
});

export const deleteListAction = (id) => ({
  type: 'DELETE_LIST',
  payload: id,
});

export const addTodoAction = (data) => ({
  type: 'ADD_TODO',
  payload: data,
});

export const deleteTodoAction = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const completeTodoAction = (id) => ({
  type: 'COMPLETE_TODO',
  payload: id,
});
