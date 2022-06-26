export const addList = (data) => ({
  type: 'ADD_LIST',
  payload: data,
});

export const deleteList = (id) => ({
  type: 'DELETE_LIST',
  payload: id,
});

export const addTodo = (data) => ({
  type: 'ADD_TODO',
  payload: data,
});

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  payload: id,
});

export const completeTodo = (id) => ({
  type: 'COMPLETE_TODO',
  payload: id,
});
