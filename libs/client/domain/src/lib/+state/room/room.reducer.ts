import { createReducer, on, Action } from '@ngrx/store'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

import * as RoomActions from './room.actions'
import { Room } from '../../entities/room'

export const ROOM_FEATURE_KEY = 'room'

export interface State extends EntityState<Room> {
  selectedId?: string | number // which Room record has been selected
  loaded: boolean // has the Room list been loaded
  error?: string | null // last known error (if any)
}

export interface RoomPartialState {
  readonly [ROOM_FEATURE_KEY]: State
}

export const roomAdapter: EntityAdapter<Room> = createEntityAdapter<Room>()

export const initialState: State = roomAdapter.getInitialState({
  // set initial required properties
  loaded: false,
})

const roomReducer = createReducer(
  initialState,
  on(RoomActions.loadRoom, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(RoomActions.loadRoomSuccess, (state, { room }) =>
    roomAdapter.upsertMany(room, { ...state, loaded: true })
  ),
  on(RoomActions.loadRoomFailure, (state, { error }) => ({ ...state, error })),
  on(RoomActions.createRoom, (state, { room }) =>
    roomAdapter.addOne(room, {
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(RoomActions.createRoomSuccess, (state) => ({
    ...state,
    loaded: true,
    error: null,
  })),
  on(RoomActions.createRoomFailure, (state, { error }) => ({ ...state, error }))
)

export function reducer(state: State | undefined, action: Action) {
  return roomReducer(state, action)
}
