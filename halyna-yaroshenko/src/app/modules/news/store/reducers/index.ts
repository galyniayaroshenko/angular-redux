import { combineReducers, Reducer } from 'redux';

import { createNewsListReducer, INewsListState, NEWS_LIST_INITIAL_STATE } from './news-list';
import { NEWS_LIST_TYPES } from '../../models/news-list';

export interface IRootNewsState {
  conflicts: INewsListState;
}

export const INITIAL_ROOT_NEWS_STATE: IRootNewsState = {
  conflicts: NEWS_LIST_INITIAL_STATE
};

export const rootNewsReducer: Reducer<IRootNewsState> = combineReducers({
  conflicts: createNewsListReducer(NEWS_LIST_TYPES.CONFLICTS)
});
