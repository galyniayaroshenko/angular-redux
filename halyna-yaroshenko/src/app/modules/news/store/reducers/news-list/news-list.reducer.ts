import { Action } from 'redux';
import { indexBy, prop } from 'ramda';

import { NewsListAction, NewsListActions } from '../../actions/news-list';
import { NewsListType, INewsList } from '../../../models/news-list';
import { LOAD_STARTED_LIST, LOAD_SUCCEEDED_LIST, LOAD_FAILED_LIST } from '../../actions/news-list/constants';

export interface INewsListState {
  error: any;
  items: {};
  loading: boolean;
}

export const NEWS_LIST_INITIAL_STATE: INewsList = {
  error: null,
  items: {},
  loading: false
};

export function createNewsListReducer(newsListType: NewsListType) {
  return function newsListReducer(
    state: INewsList = NEWS_LIST_INITIAL_STATE,
    action: Action
  ): INewsList {

    const newsListAction = action as NewsListAction;

    if (!newsListAction.meta || newsListAction.meta.newsListType !== newsListType) {
      return state;
    }

    switch (newsListAction.type) {
      case LOAD_STARTED_LIST:
        return {
          ...state,
          items: {},
          loading: true,
          error: null
        };
      case LOAD_SUCCEEDED_LIST:
        return {
          ...state,
          items: indexBy(prop('id'), newsListAction.payload),
          loading: false,
          error: null
        };
      case LOAD_FAILED_LIST:
        return {
          ...state,
          items: {},
          loading: false,
          error: newsListAction.error
        };

      default: return state;
    }
  };
}
