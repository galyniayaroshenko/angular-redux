import { Injectable } from '@angular/core';

import { RootNewsEpics } from '../../../modules/news/store/epics';

@Injectable()
export class RootEpics {
  constructor(private rootNewsEpics: RootNewsEpics) {}

  public createEpics() {
    return [
      ...this.rootNewsEpics.createEpics()
    ];
  }
}
