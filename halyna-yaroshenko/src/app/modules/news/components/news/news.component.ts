import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { dispatch, select, WithSubStore } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { ADD_LIKE, REMOVE_LIKE } from '../../store/actions/news/constants';
import { newsComponentReducer } from '../../store/reducers/news';

@WithSubStore({
  basePathMethodName: 'getBasePath',
  localReducer: newsComponentReducer
})

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-news',
  styleUrls: ['./news.component.scss'],
  templateUrl: './news.component.html'
})

export class NewsComponent {
  @Input() key: number;
  @Input() newsType: string;

  @select() readonly counterLike$: Observable<string>;
  @select() readonly description$: Observable<string>;
  @select() readonly title$: Observable<string>;
  @select() readonly url$: Observable<string>;
  @select() readonly urlToImage$: Observable<string>;

  @dispatch() addLike = () => ({ type: ADD_LIKE });
  @dispatch() removeLike = () => ({ type: REMOVE_LIKE });

  getBasePath() {
    return (this.key >= 0) ? [this.newsType, 'items', this.key] : null;
  }
}
