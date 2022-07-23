const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        todo: {
          ...state.todo,
          lists: [...state.todo.lists, action.payload],
        },
      };
    }
    case 'DELETE_LIST': {
      return {
        ...state,
        todo: {
          ...state.todo,
          lists: state.todo.lists.filter((list) => list.id !== action.payload),
          todos: state.todo.todos.filter((todo) => todo.idList !== action.payload),
        },
      };
    }
    case 'CHANGE_ACTIVE_LIST': {
      return {
        ...state,
        todo: {
          ...state.todo,
          activeList: action.payload,
        },
      };
    }
    case 'ADD_TODO': {
      return {
        ...state,
        todo: {
          ...state.todo,
          todos: [...state.todo.todos, action.payload],
        },
      };
    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todo: {
          ...state.todo,
          todos: state.todo.todos.filter((todo) => todo.id !== action.payload),
        },
      };
    }
    case 'COMPLETE_TODO': {
      return {
        ...state,
        todo: {
          ...state.todo,
          todos: state.todo.todos.map((todo) => {
            if (todo.id !== action.payload) return todo;
            return { ...todo, isCompleted: !todo.isCompleted };
          }),
        },
      };
    }

    default: return state;
  }
};

export default todoReducer;
