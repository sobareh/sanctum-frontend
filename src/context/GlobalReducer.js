const globalReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ALERT':
      return {
        ...state,
        setNotification: true,
        notification: payload,
      };
    case 'REMOVE_ALERT':
      return {
        ...state,
        setNotification: false,
        notification: {
          message: '',
          type: '',
          position: '',
        },
      };
    case 'LOGGED_IN':
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default globalReducer;
