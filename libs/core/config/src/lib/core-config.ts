import { WebSocketConfig } from '@mymessage/client/util-message';
import { InjectionToken } from '@angular/core';

export function coreConfig(): string {
  return 'core-config';
}

export const SOCKET_CONFIG_CORE = new InjectionToken<WebSocketConfig>('');
