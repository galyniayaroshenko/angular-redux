import { Injectable } from '@angular/core';

import { NEWS_LIST_TYPES } from '../modules/news/models/news-list';
import { NewsListEpics } from '../modules/news/store/epics/news-list';

@Injectable()
export class RootEpics {
  constructor(private newsListEpics: NewsListEpics) {}

  public createEpics() {
    return [
      this.newsListEpics.createEpic(NEWS_LIST_TYPES.CONFLICTS)
    ];
  }
}
