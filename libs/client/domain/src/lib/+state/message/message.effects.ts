import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MessageActions from './message.actions';
import { MessageDataService } from '../../infrastructure/message.data.service';

@Injectable()
export class MessageEffects {
  loadMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessageActions.loadMessage),
      switchMap((action) =>
        this.messageDataService.load().pipe(
          map((message) => MessageActions.loadMessageSuccess({ message })),
          catchError((error) =>
            of(MessageActions.loadMessageFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private messageDataService: MessageDataService
  ) {}
}
