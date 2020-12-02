import { MeetingFacade, MessageFacade } from '@mymessage/client/domain'
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'

@Component({
  templateUrl: './client-shell.container.html',
  styleUrls: ['./client-shell.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientShellContainer implements OnInit {
  constructor(private meetingFacade: MeetingFacade) {}

  ngOnInit(): void {
    console.log('bla');

    // const arr = new Array(20).fill(0, 5, 100).map((v, i) => v + i)
    const arr = this.funcOdd(1, 11)
    console.log(arr);

  }

  funcOdd(s: number, e: number) {
    return new Array(e - s).fill(0, s, e).map((v, i) =>  i)
    // .filter((v, i) => (v) % 2 == 0)
  }

  createRoom() {
    this.meetingFacade.createRoom({ id: 4, name: '', description: '' })
  }
}
