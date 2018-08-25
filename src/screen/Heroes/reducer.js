export const HEROES_REQUEST = 'HEROES_REQUEST';

const initialState = {
  heroes: null,
};

const reducer = function loginReducer(state = initialState, action) {
  switch (action.type) {
    case HEROES_REQUEST:
      return {
        heroes: action.heroes
      };

    default:
      return state;
  }
};

export default reducer;
