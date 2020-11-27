import { createAction, props } from '@ngrx/store';
import { Message } from '../../entities/message';


export const createMessage = createAction(
  '[Message] Add Message',
  props<{ message: Message }>()
);

export const createMessageSuccess = createAction(
  '[Message] Add Message Success'
);

export const createMessageFailure = createAction(
  '[Message] Add Message Failure',
  props<{ error: any }>()
);


export const loadMessage = createAction('[Message] Load Message');

export const loadMessageSuccess = createAction(
  '[Message] Load Message Success',
  props<{ message: Message[] }>()
);

export const loadMessageFailure = createAction(
  '[Message] Load Message Failure',
  props<{ error: any }>()
);
