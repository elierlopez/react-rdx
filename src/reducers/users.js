const users = (state = [], action) => {
    switch (action.type) {
      case 'ADD_USERS':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'TOGGLE_USER':
        return state.map(todo =>
          (user.id === action.id)
            ? {...user, completed: !user.completed}
            : user
        )
      default:
        return state
    }
  }
  
  export default users
  