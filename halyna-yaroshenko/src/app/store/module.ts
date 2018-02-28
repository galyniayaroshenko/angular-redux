import { NgModule, isDevMode } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

import { rootReducer, IAppState, INITIAL_STATE } from './reducers';
import { RootEpics } from './epics';

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics]
})

export class StoreModule {
  constructor(
    private store: NgRedux<IAppState>,
    private devTools: DevToolsExtension,
    private rootEpics: RootEpics
  ) {
    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger(), ...rootEpics.createEpics()],
      isDevMode() ? [devTools.enhancer()] : []
    );
  }
}
