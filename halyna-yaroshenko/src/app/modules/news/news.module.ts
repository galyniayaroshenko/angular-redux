import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsConflictsComponent } from './components/news-conflicts';
import { NewsListComponent } from './components/news-list';
import { NewsComponent } from './components/news';
import { CounterComponent } from './components/counter';

import { NewsService } from './services/news';
import { NewsListActions } from './store/actions/news-list';
import { NewsListEpics } from './store/epics/news-list';

@NgModule({
  declarations: [
    NewsConflictsComponent,
    NewsListComponent,
    NewsComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewsConflictsComponent
  ],
  providers: [
    NewsService,
    NewsListActions,
    NewsListEpics
  ]
})

export class NewsModule { }
