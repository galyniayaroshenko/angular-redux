import { Reducer, Action } from 'redux';
import { ADD_LIKE, REMOVE_LIKE } from '../../actions/news/constants';

const likesReducer: Reducer<number> = (state = 0, action: Action): number => {
  switch (action.type) {
    case ADD_LIKE: return state + 1;
    case REMOVE_LIKE: return state - 1;

    default: return state;
  }
};

export const newsComponentReducer: Reducer<any> = (state: any = {}, action: Action): {} => ({
  ...state,
  counterLike: likesReducer(state.counterLike, action)
});
