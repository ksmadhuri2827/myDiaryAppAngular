import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EntriesAndUser, Entry, User} from '../interfaces/userloginwithentries';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpastentriesService {

  private apiUrl='http://localhost:6161/entriesinsertion/entries/getbyuserid';
  private getapiUrl1='http://localhost:6161/entriesinsertion/entries';
  private updateapiUrl1='http://localhost:6161/entriesinsertion/entries';
  private deleteUrl1='http://localhost:6161/entriesinsertion/entries';


  constructor(private http:HttpClient) { }

  getEntries(userid: number | undefined): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.apiUrl+`/${userid}`, {});
  }
  getEntryById(entryid: number | undefined): Observable<Entry> {
    return this.http.get<Entry>(this.getapiUrl1+`/${entryid}`, {});
  }

  updateEntryById(id: string, updatedEntry: Entry): Observable<Entry> {
    return this.http.put<Entry>(`${this.updateapiUrl1}/${id}`, updatedEntry);
  }

  deleteEntryById(id: string):Observable<any>
  {
         return this.http.delete(`${this.updateapiUrl1}/${id}`);
  }

}
