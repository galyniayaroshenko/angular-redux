import { Injectable } from '@angular/core';

import { NEWS_LIST_TYPES } from '../../models/news-list';
import { NewsListEpics } from './news-list';

@Injectable()
export class RootNewsEpics {
  constructor(private newsListEpics: NewsListEpics) {}

  public createEpics() {
    return [
      this.newsListEpics.createEpic(NEWS_LIST_TYPES.CONFLICTS)
    ];
  }
}
