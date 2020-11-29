import { ClientUtilMessageModule } from '@mymessage/client/util-message';
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@mymessage/client/shell').then(
              (module) => module.ClientShellModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    ClientUtilMessageModule.forRoot({
      url: environment.server
    }),
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
