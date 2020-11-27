import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDomainModule } from '@mymessage/client/domain';
import { MeetingComponent } from './meeting.component';

@NgModule({
  imports: [CommonModule, ClientDomainModule],
  declarations: [MeetingComponent],
  exports: [MeetingComponent],
})
export class ClientFeatureMeetingModule {}
