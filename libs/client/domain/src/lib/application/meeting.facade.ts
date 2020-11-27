import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';
import { createRoom } from '../+state/room/room.actions';

import * as fromRoom from '../+state/room/room.reducer';
import * as RoomSelectors from '../+state/room/room.selectors';
import { Room } from '../entities/room';

@Injectable({ providedIn: 'root' })
export class MeetingFacade {
  loaded$ = this.store.pipe(select(RoomSelectors.getRoomLoaded));
  roomList$ = this.store.pipe(select(RoomSelectors.getAllRoom));
  selectedRoom$ = this.store.pipe(select(RoomSelectors.getSelected));

  constructor(private store: Store<fromRoom.RoomPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  createRoom(room: Room) {
    console.log(room);

    this.store.dispatch(createRoom({ room }));
  }
}
