import { Component } from '@angular/core';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { pipe, values, sortBy, prop } from 'ramda';

import { NewsListActions } from '../../store/actions/news-list';
import { INews } from '../../models/news';
import { NEWS_LIST_TYPES } from '../../models/news-list';

import { NewsService } from '../../services/news';

const sortNews = (newsDictionary$: Observable<{}>) =>
  newsDictionary$.map(pipe(
    values,
    sortBy(prop('id'))
  ));

@Component({
  selector: 'app-news-conflicts',
  styleUrls: ['./news-conflicts.component.scss'],
  templateUrl: './news-conflicts.component.html'
})

export class NewsConflictsComponent {
  @select$(['conflicts', 'items'], sortNews)
  readonly news$: Observable<INews[]>;

  @select(['conflicts', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['conflicts', 'error'])
  readonly error$: Observable<any>;

  constructor(
    private newsService: NewsService,
    actions: NewsListActions
  ) {
    actions.loadNews(NEWS_LIST_TYPES.CONFLICTS);
  }
}
