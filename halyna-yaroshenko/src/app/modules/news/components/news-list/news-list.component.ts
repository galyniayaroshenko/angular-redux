import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { INews } from '../../models/news';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-news-list',
  styleUrls: ['./news-list.component.scss'],
  templateUrl: './news-list.component.html'
})
export class NewsListComponent {
  @Input() error: Observable<any>;
  @Input() loading: Observable<boolean>;
  @Input() news: Observable<INews[]>;
  @Input() newsType: string;

  getKey(news: INews) {
    return news.id;
  }
}
