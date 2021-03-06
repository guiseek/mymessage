import { createReducer, on, Action } from '@ngrx/store'
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

import * as UserActions from './user.actions'
import { User } from '../../entities/user'

export const USER_FEATURE_KEY = 'user'

export interface State extends EntityState<User> {
  selectedId?: string | number // which User record has been selected
  loaded: boolean // has the User list been loaded
  error?: string | null // last known error (if any)
}

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: State
}
export function selectUserId(a: User): number {
  //In this case this would be optional since primary key is id
  return a.id
}
export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  // selectId: selectUserId,
  // sortComparer
})

export const initialState: State = userAdapter.getInitialState({
  // set initial required properties
  // selectedId: null,
  loaded: false,
})

const userReducer = createReducer(
  initialState,
  on(UserActions.loadUser, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(UserActions.loadUserSuccess, (state, { user }) =>
    userAdapter.upsertMany(user, { ...state, loaded: true })
  ),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error }))
)

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action)
}
