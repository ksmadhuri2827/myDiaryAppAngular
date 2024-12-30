import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddEntryServiceService } from '../../services/add-entry-service.service';
import { Router } from '@angular/router';
import {EntriesAndUser, Entry, User} from '../../interfaces/userloginwithentries';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-addentry',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './addentry.component.html',
  styleUrls: ['./addentry.component.css']
})
export class AddentryComponent {
  entrydate: string = ''; // The date will be a string in 'YYYY-MM-DD' format from the input
  description: string = '';
  addEntryService: AddEntryServiceService = inject(AddEntryServiceService);
  user: User | null = null;
  entrieslist: Entry[] = [];


  authService = inject(AuthService);

  constructor(private router: Router) {}

  ngOnInit(): void {
    const { user, entries } = this.authService.getUserData();
    this.user = user;
    this.entrieslist = entries;

    console.log('User:', this.user);
    console.log('Entries:', this.entrieslist);
  }

  saveentry(): void {

    if (!this.user) {
      console.error('User not logged in');
      return;
    }


    if (!this.entrydate || !this.description) {
      console.error('Entry date and description are required!');
      return;
    }

    const entry:Entry={
      userid:this.user.id,
      entrydate:this.entrydate,
      description:this.description
    }

    this.addEntryService.saveEntry(entry).subscribe(
      (response: EntriesAndUser) => {
        this.description='';
        this.entrydate='';
        this.router.navigate(['/dashboard/addentry']);
        console.log('Entry added successfully', response);
      },
      (error: any) => {
        console.log('Entry addition failed', error);
      }
    );
  }
}
