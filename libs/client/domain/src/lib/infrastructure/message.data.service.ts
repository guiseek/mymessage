import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Message } from '../entities/message';

@Injectable({ providedIn: 'root' })
export class MessageDataService {
  url = '/api/client/messages';

  constructor(private http: HttpClient) {}

  load(): Observable<Message[]> {
    const params = new HttpParams();
    const headers = new HttpHeaders({'Accept': 'application/json'});
    return this.http.get<Message[]>(this.url, { params, headers });
  }

  create(message: Message) {
    return this.http.post<Message>(this.url, message);
  }
}
