import { USERS_URL } from './../../constants';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  getUsers(username: string) {
    return this.http
      .get(`${USERS_URL}`, {
        params: new HttpParams().set('username', username),
      })
      .pipe(
        map((response) => {
          console.log(response);

          // const parsedUser = {id:response}
        })
      );
  }
}
