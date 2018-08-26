export const SET_LOADING = 'SET_LOADING';
export const SHOW_MESSAGE = 'SHOW_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';

const initialState = {
  loading: false,
  messages: []
};

const reducer = function commonReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SHOW_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'CLEAR_MESSAGE':
      return { ...state, messages: state.messages.filter(it => it.id != action.payload) };
    default:
      return state;
  }
};

export default reducer;
