import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientShellContainer } from './client-shell.container';
import { ClientFeatureAccountModule } from '@mymessage/client/feature-account';
import { ClientFeatureMessageModule } from '@mymessage/client/feature-message';

@NgModule({
  imports: [
    CommonModule,
    ClientFeatureAccountModule,
    ClientFeatureMessageModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ClientShellContainer },
    ]),
  ],
  declarations: [ClientShellContainer],
})
export class ClientShellModule {}
