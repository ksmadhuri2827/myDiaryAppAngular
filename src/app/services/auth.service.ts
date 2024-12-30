import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Entry, User, UserLoginWithEntriesDto} from '../interfaces/userloginwithentries';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:7061/userregistration/users/authenticate';
  private apiUrl1 = 'http://localhost:7061/userregistration/users/register';
  private user: User | null = null;
  private entries: Entry[] = [];

  constructor(private http: HttpClient) { }

  /**
   * Authenticate a user
   * @param username - User's username
   * @param password - User's password
   * @returns Observable with the response
   */
  authenticateUser(username: string, password: string): Observable<UserLoginWithEntriesDto> {
    const body = { username, password };

    return this.http.post<UserLoginWithEntriesDto>(this.apiUrl, body, {});
  }

  registerUser(username: string, password: string): Observable<any> {
    const body = { username, password };

    return this.http.post(this.apiUrl1, body);
  }

  setUserData(user: User, entries: Entry[]): void {
    this.user = user;
    this.entries = entries;
  }

  getUserData(): { user: User | null, entries: Entry[] } {
    return { user: this.user, entries: this.entries };
  }
}
