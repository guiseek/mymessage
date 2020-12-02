import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { ClientDomainModule } from '@mymessage/client/domain'
import { CommonUiMaterialModule } from '@mymessage/common/ui-material';
import { ClientUtilMessageModule } from '@mymessage/client/util-message'
import { MeetingComponent } from './meeting.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoCardControlsComponent } from './video-card/video-card-controls.component';
import { VideoCardHandleComponent } from './video-card/video-card-handle.component'

@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    ClientDomainModule,
    CommonUiMaterialModule,
    ClientUtilMessageModule.forRoot({
      url: 'http://localhost:3333',
      // url: 'https://webneek-server.herokuapp.com',
    }),
  ],
  declarations: [MeetingComponent, VideoCardComponent, VideoCardControlsComponent, VideoCardHandleComponent],
  exports: [MeetingComponent, VideoCardComponent, VideoCardControlsComponent, VideoCardHandleComponent],
})
export class ClientFeatureMeetingModule {}
