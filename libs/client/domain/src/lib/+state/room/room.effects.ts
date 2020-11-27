import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as RoomActions from './room.actions';
import { RoomDataService } from '../../infrastructure/room.data.service';

@Injectable()
export class RoomEffects {
  loadRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.loadRoom),
      switchMap((action) =>
        this.roomDataService.load().pipe(
          map((room) => RoomActions.loadRoomSuccess({ room })),
          catchError((error) => of(RoomActions.loadRoomFailure({ error })))
        )
      )
    )
  );

  createRoom$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomActions.createRoom),
      switchMap((action) =>
        this.roomDataService.create(action.room).pipe(
          map((room) => RoomActions.createRoomSuccess()),
          catchError((error) => of(RoomActions.createRoomFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private roomDataService: RoomDataService
  ) {}
}
