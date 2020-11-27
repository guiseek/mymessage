import { Component, OnInit } from '@angular/core';
import { MessageFacade, loadMessage } from '@mymessage/client/domain';

@Component({
  selector: 'client-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  messageList$ = this.messageFacade.messageList$;

  constructor(private messageFacade: MessageFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.messageFacade.dispatch(loadMessage());
  }
}
