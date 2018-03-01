import { combineReducers, Reducer } from 'redux';

import { rootNewsReducer, IRootNewsState, INITIAL_ROOT_NEWS_STATE } from '../../../modules/news/store/reducers';
import { NEWS_LIST_TYPES } from '../../../modules/news/models/news-list';

export interface IAppState {
  news: IRootNewsState;
}

export const INITIAL_STATE: IAppState = {
  news: INITIAL_ROOT_NEWS_STATE
};

export const rootReducer: Reducer<IAppState> = combineReducers({
  news: rootNewsReducer
});
