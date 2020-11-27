import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../entities/user';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<User[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<User[]>(url, {params, headers});
        */

    return of([
      {
        id: 1,
        name: 'Lorem ipsum',
        username: 'guione',
        location: [-0, -0],
        description: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 2,
        name: 'At vero eos',
        username: 'guitwo',
        location: [-0, -0],
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        name: 'Duis autem',
        username: 'guithree',
        location: [-0, -0],
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
    ]);
  }
  select(id: number) {
    return this.load().pipe(map((users) => users.find((u) => u.id === id)));
  }
}
