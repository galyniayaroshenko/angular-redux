import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';

import { INews } from '../../../models/news';
import { NewsListType } from '../../../models/news-list';
import { LOAD_NEWS_LIST, LOAD_STARTED_LIST, LOAD_SUCCEEDED_LIST, LOAD_FAILED_LIST } from './constants';

type Payload = INews[];
interface MetaData {
  newsListType: NewsListType;
}
export type NewsListAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class NewsListActions {
  @dispatch()
  loadNews = (newsListType: NewsListType): NewsListAction => ({
    type: LOAD_NEWS_LIST,
    meta: { newsListType },
    payload: null
  })

  loadStarted = (newsListType: NewsListType): NewsListAction => ({
    type: LOAD_STARTED_LIST,
    meta: { newsListType },
    payload: null
  })

  loadSucceeded = (newsListType: NewsListType, payload: Payload): NewsListAction => ({
    type: LOAD_SUCCEEDED_LIST,
    meta: { newsListType },
    payload
  })

  loadFailed = (newsListType: NewsListType, error): NewsListAction => ({
    type: LOAD_FAILED_LIST,
    meta: { newsListType },
    payload: null,
    error
  })
}
