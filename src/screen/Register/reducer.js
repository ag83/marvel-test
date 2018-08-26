export const REGISTER_REQUESTING = 'REGISTER_REQUESTING';

const initialState = {
  requesting: false,
};

const reducer = function registerReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUESTING:
      return {
        requesting: true,
      };
    default:
      return state;
  }
};

export default reducer;
