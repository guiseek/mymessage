import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MESSAGE_FEATURE_KEY,
  State,
  MessagePartialState,
  messageAdapter,
} from './message.reducer';

// Lookup the 'Message' feature state managed by NgRx
export const getMessageState = createFeatureSelector<
  MessagePartialState,
  State
>(MESSAGE_FEATURE_KEY);

const { selectAll, selectEntities } = messageAdapter.getSelectors();

export const getMessageLoaded = createSelector(
  getMessageState,
  (state: State) => state.loaded
);

export const getMessageError = createSelector(
  getMessageState,
  (state: State) => state.error
);

export const getAllMessage = createSelector(getMessageState, (state: State) =>
  selectAll(state)
);

export const getMessageEntities = createSelector(
  getMessageState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getMessageState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getMessageEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
