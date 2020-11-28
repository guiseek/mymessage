import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WebSocketConfig,
  WebSocketFacade,
  WebSocketFactory,
  SOCKET_CONFIG_TOKEN,
} from './application/web-socket.facade';

@NgModule({
  imports: [CommonModule],
})
export class ClientUtilMessageModule {
  static forRoot(
    config: WebSocketConfig
  ): ModuleWithProviders<ClientUtilMessageModule> {
    return {
      ngModule: ClientUtilMessageModule,
      providers: [
        { provide: SOCKET_CONFIG_TOKEN, useValue: config || {} },
        {
          provide: WebSocketFacade,
          useFactory: WebSocketFactory,
          deps: [SOCKET_CONFIG_TOKEN],
        },
      ],
    };
  }
}
