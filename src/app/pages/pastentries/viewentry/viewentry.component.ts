import { Component, OnInit, inject } from '@angular/core';
import { GetpastentriesService } from '../../../services/getpastentries.service';
import { AuthService } from '../../../services/auth.service';
import { Entry, User } from '../../../interfaces/userloginwithentries';
import { ActivatedRoute } from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-viewentry',
  templateUrl: './viewentry.component.html',
  imports: [
    DatePipe
  ],
  styleUrls: ['./viewentry.component.css']
})
export class ViewentryComponent implements OnInit {
  getpastentriesService = inject(GetpastentriesService);
  authService = inject(AuthService);
  user: User | null = null;
  entryId: string | null = null;
  entry: Entry | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.entryId = this.route.snapshot.paramMap.get('id');
    const { user, entries } = this.authService.getUserData();
    this.user = user;
    console.log(user);

    if (this.entryId) {
      // @ts-ignore
      this.getpastentriesService.getEntryById(this.entryId).subscribe(
        (response: Entry) => {
          this.entry = response;
          console.log('Entry Fetched successfully', response);
        },
        (error: any) => {
          console.log('Entry Fetch failed', error);
        }
      );
    } else {
      console.log('Invalid entryId:', this.entryId);
    }
  }
}
