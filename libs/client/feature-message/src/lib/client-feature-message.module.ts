import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDomainModule } from '@mymessage/client/domain';
import { MessageComponent } from './message.component';

@NgModule({
  imports: [CommonModule, ClientDomainModule],
  declarations: [MessageComponent],
  exports: [MessageComponent],
})
export class ClientFeatureMessageModule {}
