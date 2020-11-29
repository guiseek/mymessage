import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UserEffects } from './+state/user/user.effects'
import * as fromUser from './+state/user/user.reducer'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { MessageEffects } from './+state/message/message.effects'
import * as fromMessage from './+state/message/message.reducer'
import { RoomEffects } from './+state/room/room.effects'
import * as fromRoom from './+state/room/room.reducer'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
    StoreModule.forFeature(
      fromMessage.MESSAGE_FEATURE_KEY,
      fromMessage.reducer
    ),
    EffectsModule.forFeature([MessageEffects]),
    StoreModule.forFeature(fromRoom.ROOM_FEATURE_KEY, fromRoom.reducer),
    EffectsModule.forFeature([RoomEffects]),
  ],
})
export class ClientDomainModule {}
