import { ClientUiMediaModule } from '@mymessage/client/ui-media'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ClientDomainModule } from '@mymessage/client/domain'
import { ClientUtilMessageModule } from '@mymessage/client/util-message'
import { MessageComponent } from './message.component'

@NgModule({
  imports: [
    CommonModule,
    ClientDomainModule,
    ClientUiMediaModule,
    ClientUtilMessageModule,
  ],
  declarations: [MessageComponent],
  exports: [MessageComponent],
})
export class ClientFeatureMessageModule {}
