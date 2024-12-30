import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Entry, User} from '../../../interfaces/userloginwithentries';
import {GetpastentriesService} from '../../../services/getpastentries.service';
import {AuthService} from '../../../services/auth.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-updateentry',
  imports: [
    FormsModule
  ],
  templateUrl: './updateentry.component.html',
  styleUrl: './updateentry.component.css'
})
export class UpdateentryComponent implements OnInit{
  getpastentriesService = inject(GetpastentriesService);
  authService = inject(AuthService);
  user: User | null = null;
  entryId: string | null = null;
  entry: Entry | null = null;

  entrydate: string = '';
  description: string = '';

  constructor(private route: ActivatedRoute,private router: Router) {}

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
          this.entrydate = response.entrydate;
          this.description = response.description;
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

  processentryupdate(): void {
    if (this.entry && this.entryId) {

      this.entry.entrydate = this.entrydate;
      this.entry.description = this.description;
      this.getpastentriesService.updateEntryById(this.entryId, this.entry).subscribe(
        (response: Entry) => {
          console.log('Entry updated successfully', response);
          // Redirect to the past entries page
          this.router.navigate(['/dashboard/pastentries']);
        },
        (error: any) => {
          console.log('Failed to update entry', error);
        }
      );
    } else {
      console.log('Entry or entryId is invalid:', this.entry, this.entryId);
    }
  }

}
