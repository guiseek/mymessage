import { createAction, props } from '@ngrx/store';
import { User } from '../../entities/user';

export const loadUser = createAction('[User] Load User');

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User[] }>()
);

export const loadUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: any }>()
);

export const selectUser = createAction(
  '[User] Select User',
  props<{ id: number }>()
);

export const selectUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>()
);

export const selectUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: any }>()
);
