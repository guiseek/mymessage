import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as MessageActions from './message.actions';
import { Message } from '../../entities/message';

export const MESSAGE_FEATURE_KEY = 'message';

export interface State extends EntityState<Message> {
  selectedId?: string | number; // which Message record has been selected
  loaded: boolean; // has the Message list been loaded
  error?: string | null; // last known error (if any)
}

export interface MessagePartialState {
  readonly [MESSAGE_FEATURE_KEY]: State;
}

export function selectMessageId(event: Message): string {
  return event._id;
}
export const messageAdapter: EntityAdapter<Message> = createEntityAdapter<
  Message
>({
  selectId: selectMessageId,
});

export const initialState: State = messageAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const messageReducer = createReducer(
  initialState,
  on(MessageActions.loadMessage, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MessageActions.loadMessageSuccess, (state, { message }) =>
    messageAdapter.upsertMany(message, { ...state, loaded: true })
  ),
  on(MessageActions.loadMessageFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return messageReducer(state, action);
}
