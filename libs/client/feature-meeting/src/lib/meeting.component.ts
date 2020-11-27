import { Component, OnInit } from '@angular/core';
import { MeetingFacade, loadRoom } from '@mymessage/client/domain';

@Component({
  selector: 'client-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss'],
})
export class MeetingComponent implements OnInit {
  roomList$ = this.meetingFacade.roomList$;

  constructor(private meetingFacade: MeetingFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.meetingFacade.dispatch(loadRoom());
  }
}
