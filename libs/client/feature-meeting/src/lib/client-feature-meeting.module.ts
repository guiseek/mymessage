import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDomainModule } from '@mymessage/client/domain';
import { ClientUtilMessageModule } from '@mymessage/client/util-message';
import { MeetingComponent } from './meeting.component';

@NgModule({
  imports: [
    CommonModule,
    ClientDomainModule,
    ClientUtilMessageModule.forRoot({
      url: 'http://localhost:3333',
    }),
  ],
  declarations: [MeetingComponent],
  exports: [MeetingComponent],
})
export class ClientFeatureMeetingModule {}
