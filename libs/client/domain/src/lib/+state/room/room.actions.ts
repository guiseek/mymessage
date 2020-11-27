import { createAction, props } from '@ngrx/store';
import { Room } from '../../entities/room';

export const createRoom = createAction(
  '[Room] Add Room',
  props<{ room: Room }>()
);

export const createRoomSuccess = createAction(
  '[Room] Add Room Success'
);

export const createRoomFailure = createAction(
  '[Room] Add Room Failure',
  props<{ error: any }>()
);


export const loadRoom = createAction('[Room] Load Room');

export const loadRoomSuccess = createAction(
  '[Room] Load Room Success',
  props<{ room: Room[] }>()
);

export const loadRoomFailure = createAction(
  '[Room] Load Room Failure',
  props<{ error: any }>()
);

