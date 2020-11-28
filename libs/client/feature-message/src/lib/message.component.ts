import { FormBuilder, Validators } from '@angular/forms'
// import { Chat } from '@mymessage/core/entities';
import { Component, OnInit } from '@angular/core'
import { MessageFacade, loadMessage } from '@mymessage/client/domain'
import { WebSocketFacade } from '@mymessage/client/util-message'

@Component({
  selector: 'client-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  messageList$ = this.messageFacade.messageList$

  form = this.fb.group({
    sender: ['', [Validators.required]],
  })

  constructor(
    private messageFacade: MessageFacade,
    private socket: WebSocketFacade,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.load()
  }

  load(): void {
    this.messageFacade.dispatch(loadMessage())
  }
  create(data: any) {}
}
