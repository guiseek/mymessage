import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromMessage from '../+state/message/message.reducer';
import * as MessageSelectors from '../+state/message/message.selectors';

@Injectable({ providedIn: 'root' })
export class MessageFacade {
  loaded$ = this.store.pipe(select(MessageSelectors.getMessageLoaded));
  messageList$ = this.store.pipe(select(MessageSelectors.getAllMessage));
  selectedMessage$ = this.store.pipe(select(MessageSelectors.getSelected));

  constructor(private store: Store<fromMessage.MessagePartialState>) { }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
