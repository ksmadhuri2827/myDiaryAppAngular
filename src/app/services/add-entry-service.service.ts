import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EntriesAndUser, Entry} from '../interfaces/userloginwithentries';

@Injectable({
  providedIn: 'root'
})
export class AddEntryServiceService {

  private apiUrl = 'http://localhost:6161/entriesinsertion/entries/saveentry';

  constructor(private http: HttpClient) {}

  saveEntry(entry:Entry): Observable<EntriesAndUser> {


    return this.http.post<EntriesAndUser>(this.apiUrl, entry, {});
  }
}
