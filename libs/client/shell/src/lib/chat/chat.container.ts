import { MessageFacade } from '@mymessage/client/domain'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'mymessage-chat',
  templateUrl: './chat.container.html',
  styleUrls: ['./chat.container.scss'],
})
export class ChatContainer implements OnInit {
  constructor(private messageFacade: MessageFacade) {}

  ngOnInit(): void {}

  sendMessage(message) {
    console.log(message)
    this.messageFacade.create(message)
  }
  log(data: any) {
    console.log(data)
  }
}
