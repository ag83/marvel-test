export const HERO_REQUEST = 'HERO_REQUEST';
export const HERO_SUCCESS = 'HERO_SUCCESS';

const initialSate = {
  hero: null
};

const reducer = function heroReducer(state = initialSate, action) {
  switch (action.type) {
    case HERO_REQUEST:
      return state;
    case HERO_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
