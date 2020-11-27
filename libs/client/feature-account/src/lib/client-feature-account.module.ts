import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientDomainModule } from '@mymessage/client/domain';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [CommonModule, ClientDomainModule],
  declarations: [AccountComponent],
  exports: [AccountComponent],
})
export class ClientFeatureAccountModule {}
