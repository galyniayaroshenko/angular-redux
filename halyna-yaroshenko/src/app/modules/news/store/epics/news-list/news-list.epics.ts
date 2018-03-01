import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { IAppState } from '../../../../../store/reducers/app';
import { LOAD_NEWS_LIST } from '../../actions/news-list/constants';
import { NewsListAction, NewsListActions } from '../../actions/news-list';
import { NewsListType } from '../../../models/news-list';
import { NewsService } from '../../../services/news';

@Injectable()
export class NewsListEpics {
  constructor(
    private service: NewsService,
    private actions: NewsListActions
  ) {}

  createEpic(newsListType: NewsListType) {
    return createEpicMiddleware(this.createLoadNewsListEpic(newsListType));
  }

  /* private methods */
  private actionIsForCorrectNewsListType(newsListType: NewsListType) {
    return (action: NewsListAction): boolean => {
      return action.meta.newsListType === newsListType;
    };
  }

  private createLoadNewsListEpic(newsListType: NewsListType): Epic<NewsListAction, IAppState> {
    return (action$, store) => {
      return action$
        .ofType(LOAD_NEWS_LIST)
        .filter(action => this.actionIsForCorrectNewsListType(newsListType)(action))
        .filter(() => this.newsListNotAlreadyFetched(newsListType, store.getState()))
        .switchMap(() => this.service.getAll(newsListType)
          .map(data => this.actions.loadSucceeded(newsListType, data))
          .catch(response => of(this.actions.loadFailed(newsListType, {
            status: '' + response.status
          })))
          .startWith(this.actions.loadStarted(newsListType))
        );
    };
  }

  private newsListNotAlreadyFetched(newsListType: NewsListType, state: IAppState): boolean {
    return !(state[newsListType] && state[newsListType].items && Object.keys(state[newsListType].items).length);
  }
}
