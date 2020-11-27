import { MeetingFacade, MessageFacade } from '@mymessage/client/domain';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './client-shell.container.html',
  styleUrls: ['./client-shell.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientShellContainer implements OnInit {
  constructor(
    private meetingFacade: MeetingFacade,
    private messageFacade: MessageFacade
  ) {}

  ngOnInit(): void {}

  createRoom() {
    this.meetingFacade.createRoom({ id: 4, name: '', description: '' });
  }

  sendMessage(message) {
    console.log(message);
    this.messageFacade.create(message)
  }
  log(data: any) {
    console.log(data);
  }
}
