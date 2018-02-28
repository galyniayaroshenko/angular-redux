import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { StoreModule } from './store';
import { NewsModule } from './modules/news/news.module';

import { App } from './app';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    HttpModule,

    StoreModule,
    NewsModule
  ],
  providers: [],
  bootstrap: [App]
})

export class AppModule {}
