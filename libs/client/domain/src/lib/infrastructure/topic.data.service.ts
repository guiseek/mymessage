import { WebSocketFacade } from '@mymessage/client/util-message'
import { Injectable } from '@angular/core'
import { Topic } from '../entities/topic'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class TopicDataService {
  constructor(private socket: WebSocketFacade) {}

  load(): Observable<Topic> {
    return new Observable((sub) => {
      this.socket.on('offer', (t: Topic) => sub.next(t))
    })
  }

  send(type: 'offer' | 'answer', topic: Topic) {
    this.socket.emit(type, topic)
  }
}
