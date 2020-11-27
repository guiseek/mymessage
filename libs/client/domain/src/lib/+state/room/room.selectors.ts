import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ROOM_FEATURE_KEY,
  State,
  RoomPartialState,
  roomAdapter,
} from './room.reducer';

// Lookup the 'Room' feature state managed by NgRx
export const getRoomState = createFeatureSelector<RoomPartialState, State>(
  ROOM_FEATURE_KEY
);

const { selectAll, selectEntities } = roomAdapter.getSelectors();

export const getRoomLoaded = createSelector(
  getRoomState,
  (state: State) => state.loaded
);

export const getRoomError = createSelector(
  getRoomState,
  (state: State) => state.error
);

export const getAllRoom = createSelector(getRoomState, (state: State) =>
  selectAll(state)
);

export const getRoomEntities = createSelector(getRoomState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getRoomState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getRoomEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
