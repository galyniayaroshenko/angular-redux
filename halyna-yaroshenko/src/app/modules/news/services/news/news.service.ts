import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { INews, fromServer } from '../../models/news';
import { NEWS_LIST_TYPES, NewsListType } from '../../models/news-list';

const URLS = {
  [NEWS_LIST_TYPES.CONFLICTS]: 'http://www.mocky.io/v2/5a9535533500000f009b114f',
  [NEWS_LIST_TYPES.EMERGENCY]: 'http://www.mocky.io/v2/5a94189435000073009b0d6c'
};

@Injectable()
export class NewsService {
  constructor(private http: Http) {}

  getAll(newsListType: NewsListType): Observable<INews[]> {
    return this.http.get(URLS[newsListType])
      .map(resp => resp.json())
      .map(records => records.map(fromServer));
  }
}
