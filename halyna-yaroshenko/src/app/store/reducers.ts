import { combineReducers, Reducer } from 'redux';

import { createNewsListReducer, INewsListState, NEWS_LIST_INITIAL_STATE } from '../modules/news/store/reducers/news-list';
import { NEWS_LIST_TYPES } from '../modules/news/models/news-list';

export interface IAppState {
  conflicts: INewsListState;
}

export const INITIAL_STATE: IAppState = {
  conflicts: NEWS_LIST_INITIAL_STATE
};

export const rootReducer: Reducer<IAppState> = combineReducers({
  conflicts: createNewsListReducer(NEWS_LIST_TYPES.CONFLICTS)
});
