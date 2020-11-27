import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Room } from '../entities/room';

@Injectable({ providedIn: 'root' })
export class RoomDataService {
  rooms = new BehaviorSubject<Room[]>([]);
  rooms$ = this.rooms.asObservable();

  constructor(private http: HttpClient) {}

  load(): Observable<Room[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Room[]>(url, {params, headers});
        */

    this.rooms.next([
      { id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet' },
      {
        id: 2,
        name: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        name: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
    ]);
    return this.rooms$;
  }

  create(room: Room) {
    console.log(room);

    this.rooms.next([...this.rooms.value, room]);
    return this.rooms$;
  }
}
