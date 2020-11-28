import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { User } from '../entities/user'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class UserDataService {
  url = '/api/client/users'

  constructor(private http: HttpClient) {}

  load(): Observable<User[]> {
    const params = new HttpParams()
    const headers = new HttpHeaders({ Accept: 'application/json' })
    return this.http.get<User[]>(this.url, { params, headers })
  }
  create(user: User) {
    return this.http.post<User>(this.url, user)
  }
  select(id: number) {
    return this.load().pipe(map((users) => users.find((u) => u.id === id)))
  }
}
