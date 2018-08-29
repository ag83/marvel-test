export const HEROES_REQUEST = 'HEROES_REQUEST';
export const HEROES_SUCCESS = 'HEROES_SUCCESS';
export const SET_PARAMETER = 'SET_PARAMETER';
export const CLEAR_DATA = 'CLEAR_DATA';

const initialState = {
  heroes: [],
  totalHeroes: null,
  params: {
    limit: 10,
    offset: 0
  },
};

const reducer = function heroesReducer(state = initialState, action) {
  switch (action.type) {
    case 'HEROES_SUCCESS':
      return {
        ...state,
        totalHeroes: action.payload.total,
        heroes: [...action.payload.results],
      };
    case 'SET_PARAMETER':
      return {
        ...state,
        params: { ...state.params, ...action.payload },
      };
    case 'CLEAR_DATA':
      return initialState;
    default:
      return state;
  }
};

export default reducer;
