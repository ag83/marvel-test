export const REGISTER_REQUESTING = 'SIGNUP_REQUESTING';
export const REGISTER_SUCCESS = 'SIGNUP_SUCCESS';
export const REGISTER_ERROR = 'SIGNUP_ERROR';

const initialState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
};

const reducer = function rgisterReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUESTING:
      return {
        requesting: true,
        successful: false,
        messages: [{ body: 'Signing up...', time: new Date() }],
        errors: [],
      };

    case REGISTER_SUCCESS:
      return {
        errors: [],
        messages: [{
          body: `Successfully created account for ${action.response.email}`,
          time: new Date(),
        }],
        requesting: false,
        successful: true,
      };

    case REGISTER_ERROR:
      return {
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        messages: [],
        requesting: false,
        successful: false,
      };

    default:
      return state;
  }
};

export default reducer;
