import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientShellContainer } from './client-shell.container';
import { ClientUiMessageModule } from '@mymessage/client/ui-message';
import { ClientFeatureAccountModule } from '@mymessage/client/feature-account';
import { ClientFeatureMessageModule } from '@mymessage/client/feature-message';
import { ClientFeatureMeetingModule } from '@mymessage/client/feature-meeting';

@NgModule({
  imports: [
    CommonModule,
    ClientUiMessageModule,
    ClientFeatureAccountModule,
    ClientFeatureMessageModule,
    ClientFeatureMeetingModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ClientShellContainer },
    ]),
  ],
  declarations: [ClientShellContainer],
})
export class ClientShellModule {}
