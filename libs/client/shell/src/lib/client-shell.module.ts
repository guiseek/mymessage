import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClientShellContainer } from './client-shell.container'
import { ClientUiMessageModule } from '@mymessage/client/ui-message'
import { ClientFeatureAccountModule } from '@mymessage/client/feature-account'
import { ClientFeatureMessageModule } from '@mymessage/client/feature-message'
import { ClientFeatureMeetingModule } from '@mymessage/client/feature-meeting'
import { RoomContainer } from './room/room.container'
import { ChatContainer } from './chat/chat.container'

@NgModule({
  imports: [
    CommonModule,
    ClientUiMessageModule,
    ClientFeatureAccountModule,
    ClientFeatureMessageModule,
    ClientFeatureMeetingModule,
    RouterModule.forChild([
      {
        path: '',
        // pathMatch: 'full',
        component: ClientShellContainer,
        children: [
          // {
          //   path: '',
          //   component: ChatContainer,
          // },
          {
            path: '',
            component: RoomContainer,
          },
          {
            path: ':room',
            component: RoomContainer,
          },
          // {
          //   path: '',
          //   component: ChatContainer,
          // },
        ],
      },
    ]),
  ],
  declarations: [ClientShellContainer, RoomContainer, ChatContainer],
})
export class ClientShellModule {}
