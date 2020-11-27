import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as UserActions from './user.actions';
import { UserDataService } from '../../infrastructure/user.data.service';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap((action) =>
        this.userDataService.load().pipe(
          map((user) => UserActions.loadUserSuccess({ user })),
          catchError((error) => of(UserActions.loadUserFailure({ error })))
        )
      )
    )
  );

  // selectUser$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(UserActions.selectUser),
  //     switchMap((action) =>
  //       this.userDataService.select(action.id).pipe(
  //         map((user) => {
  //           console.log('effects: ', user);

  //           return UserActions.selectUserSuccess({ user })
  //         }),
  //         catchError((error) => of(UserActions.selectUserFailure({ error })))
  //       )
  //     )
  //   )
  // );

  constructor(
    private actions$: Actions,
    private userDataService: UserDataService
  ) {}
}
