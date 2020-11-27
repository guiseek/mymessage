import { map } from 'rxjs/operators';
import { from } from 'rxjs';

export async function getDevices(deviceKind?: MediaDeviceKind) {
  const filter = ({ kind }) => kind === deviceKind;
  return from(navigator.mediaDevices.enumerateDevices()).pipe(
    map((devices) => (deviceKind ? devices.filter(filter) : devices))
  );
}
