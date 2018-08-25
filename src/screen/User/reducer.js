export const USER_SET = 'USER_SET';
export const USER_UNSET = 'USER_UNSET';

const initialSate = {
  user: null
};

const reducer = function userReducer(state = initialSate, action) {
  switch (action.type) {
    case USER_SET:
      return {
        user: action.user,
      };

    case USER_UNSET:
      return {
        user: null
      };

    default:
      return state;
  }
};

export default reducer;
