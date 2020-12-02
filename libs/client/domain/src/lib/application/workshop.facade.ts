import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import { Topic } from '../entities/topic'
import { TopicDataService } from '../infrastructure/topic.data.service'

@Injectable({ providedIn: 'root' })
export class WorkshopFacade {
  private topicSubject = new BehaviorSubject<Topic>(null)
  topic$ = this.topicSubject.asObservable()

  constructor(private topicDataService: TopicDataService) {}

  load(): void {
    this.topicDataService.load().subscribe(
      (topic) => {
        this.topicSubject.next(topic)
      },
      (err) => {
        console.error('err', err)
      }
    )
  }

  offer(topic: Topic) {
    this.topicDataService.send('offer', topic)
  }
}
