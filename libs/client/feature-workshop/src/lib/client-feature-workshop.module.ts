import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { ClientDomainModule } from '@mymessage/client/domain';
import { ClientUiMediaModule } from '@mymessage/client/ui-media';
import { WorkshopComponent } from './workshop.component'

@NgModule({
  imports: [CommonModule, ClientUiMediaModule, ClientDomainModule],
  declarations: [WorkshopComponent],
  exports: [WorkshopComponent],
})
export class ClientFeatureWorkshopModule {}
