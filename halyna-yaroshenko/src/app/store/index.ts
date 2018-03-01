import { createLogger } from 'redux-logger';
import { NgModule, isDevMode } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { RootEpics } from './epics/app';
import { rootReducer, IAppState, INITIAL_STATE } from './reducers/app';

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics]
})

export class StoreModule {
  constructor(
    private devTools: DevToolsExtension,
    private rootEpics: RootEpics,
    private store: NgRedux<IAppState>
  ) {
    store.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger(), ...rootEpics.createEpics()],
      isDevMode() ? [devTools.enhancer()] : []
    );
  }
}
