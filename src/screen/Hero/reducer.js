export const HERO_REQUEST = 'HERO_REQUEST';
export const HERO_SUCCESS = 'HERO_SUCCESS';
export const CLEAR_HERO = 'CLEAR_HERO';

const initialState = {
  hero: null
};

const reducer = function heroReducer(state = initialState, action) {
  switch (action.type) {
    case HERO_SUCCESS:
      return {
        ...state,
        hero: action.payload,
      };
    case CLEAR_HERO:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
