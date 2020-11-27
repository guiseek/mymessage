import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Room } from '../entities/room';

@Injectable({ providedIn: 'root' })
export class RoomDataService {
  url = '/api/client/rooms';

  rooms = new BehaviorSubject<Room[]>([]);
  rooms$ = this.rooms.asObservable();

  constructor(private http: HttpClient) {}

  load(): Observable<Room[]> {
    const params = new HttpParams();
    const headers = new HttpHeaders({ Accept: 'application/json' });
    return this.http.get<Room[]>(this.url, { params, headers });
  }

  create(room: Room) {
    return this.http.post<Room>(this.url, room);
    // this.rooms.next([...this.rooms.value, room]);
    // return this.rooms$;
  }
}
