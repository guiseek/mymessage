import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { HostRefDirective } from './host-ref.directive';
import { VideoComponent } from './video/video.component'

@NgModule({
  imports: [CommonModule],
  declarations: [HostRefDirective, VideoComponent],
  exports: [HostRefDirective, VideoComponent],
})
export class ClientUiMediaModule {}
